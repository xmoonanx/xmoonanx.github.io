---
title: "CD가 success인데 새 빌드가 EC2에 안 올라가던 두 가지 이유"
date: 2026-05-06
categories: [Engineering, DevOps]
tags: [ec2, docker-compose, nginx, github-actions, ci-cd, debugging]
description: "GitHub Actions가 success를 찍었는데 EC2의 컨테이너는 옛 빌드 그대로였다. 같은 호스트에 시스템 nginx가 살아있었고, CD 스크립트는 실제로 다시 빌드하지 않고 있었다."
---

## Problem

EC2 한 대에 컨테이너 세 개 — Spring(8080), FastAPI(8000), 정적 SPA를 서빙하는 nginx — 를 올리고 외부에서는 nginx의 80만 보이게 하는 single-host 구성으로 옮기는 작업을 했다. nginx 컨테이너가 정적 파일을 직접 서빙하면서 `/api/...`, `/profile`, `/meals` 같은 경로는 같은 docker 네트워크 안의 Spring으로 reverse proxy하는 식이다. 같은 오리진에서 모든 트래픽이 들어오므로 CORS/쿠키 SameSite 이슈가 자연 해소되는 게 장점이다.

PR을 머지하면 GitHub Actions가 SSH로 EC2에 들어가 `docker compose up -d`까지 돌리는 단순한 CD다. 옮기는 과정에서 두 번 연속으로 같은 모양의 사고가 났다.

**1차** — frontend 컨테이너를 처음 추가한 PR이 머지된 직후, CD 단계에서 명확한 에러가 떨어졌다.

```
Error response from daemon: failed to set up container networking:
driver failed programming external connectivity on endpoint nutriagent-frontend:
failed to bind host port 0.0.0.0:80/tcp: address already in use
```

`set -e` 덕분에 즉시 abort. 다행히 spring/fastapi 컨테이너는 force-recreate까지 마쳐 살아있었다.

**2차** — 그 다음 PR(코드 변경)을 머지했더니 이번엔 CD가 깔끔히 success였다. 그런데 브라우저에서 동작이 그대로였다. 외부에서 번들을 뜯어보면 hash도, `Last-Modified`도 직전 배포 그대로였다.

```
$ curl -sI http://13.220.247.35/ | grep -i last-modified
Last-Modified: Wed, 06 May 2026 08:19:59 GMT     # 한 시간 전
$ curl -s http://13.220.247.35/ | grep -oE 'assets/index-[^"]+\.js'
assets/index-BOZtEIUe.js                          # 직전 머지의 hash
```

CD가 통과했는데 컨테이너는 옛 이미지 그대로. 두 사고는 표면 증상이 달랐지만 원인은 EC2와 docker compose의 같은 단면을 가리켰다.

## Root Cause

### 함정 1 — 호스트 OS의 시스템 nginx가 80을 점유 중

EC2에 SSH로 들어가 80 점유자를 보면 컨테이너가 아니었다.

```
$ sudo ss -tlnp 'sport = :80'
LISTEN 0 511 0.0.0.0:80 ... users:(("nginx",pid=2127868),("nginx",pid=2127867),("nginx",pid=2127865))
$ sudo lsof -i :80
nginx  2127865  root   ... TCP *:http (LISTEN)
nginx  2127867  www-data ...
```

이 호스트 nginx는 운영 중인 시스템 nginx로, 한 줄짜리 역할을 하고 있었다.

```
$ sudo nginx -T | grep proxy_pass
          proxy_pass http://localhost:8080;
```

즉 80 → Spring(localhost:8080)을 단순 reverse proxy. 그런데 우리가 새로 올리는 frontend 컨테이너의 nginx도 같은 80을 잡으려 했고, 호스트 nginx가 먼저 들고 있어서 컨테이너 nginx가 부팅에 실패했다.

여기서 한 가지 함정이 더 있다. 호스트 nginx를 그냥 죽이면 안 된다. **8080은 EC2 보안그룹에서 외부 차단이라, 외부 → 백엔드 유일한 경로가 바로 그 호스트 nginx의 80→8080 프록시**였다. 무턱대고 정지하면 컨테이너가 다 살아있어도 외부에서 백엔드에 닿을 수 없다. 다만 우리 컨테이너 nginx가 동일한 일(80→Spring 8080) + 정적 SPA 서빙까지 수행하도록 이미 설계되어 있었기 때문에, **기능 동등성을 확인한 뒤 호스트 nginx를 retire하는 교체 시나리오**로 가는 것이 안전했다.

### 함정 2 — `docker compose up`은 재빌드를 보장하지 않는다

1차 사고를 해결하고 두 번째 PR을 머지했을 때 CD는 success였다. 그런데 SPA의 JS 번들 hash가 변하지 않았다는 건 frontend 이미지가 다시 빌드되지 않았다는 뜻이다.

당시 CD 스크립트는 spring/fastapi만 명시적으로 `build`를 호출했다.

```yaml
docker compose build --no-cache spring
docker compose build fastapi
docker compose up -d --force-recreate
```

`docker compose up -d` 자체는 **이미지가 이미 존재하면 재빌드하지 않는다**. 첫 배포에서는 frontend 이미지가 없어 자동 빌드되지만, 그 다음부터는 force-recreate만 일어나고 코드 변경은 EC2에 닿지 않는다. 이 차이는 평소엔 잘 안 보인다 — 빌드 단계가 누락된 서비스가 새로 추가될 때만 드러난다.

번외로 EC2에서 직접 손으로 올려보려다 또 한 번 막혔다.

```
$ sudo docker-compose up -d
...
KeyError: 'ContainerConfig'
```

이건 legacy `docker-compose`(Python v1.29.2)가 BuildKit이 만드는 OCI manifest 이미지를 파싱하지 못하는 알려진 버그다. CD에서는 `docker compose`(공백, v2 플러그인)를 쓰고 있어서 정상 동작하지만, 사람이 SSH로 들어가 `sudo docker-compose`(하이픈, v1)을 쓰면 같은 컴포즈 파일이 다른 결과를 낸다. 같은 머신에 두 버전이 공존하는 환경에서 항상 만나는 함정이다.

## Solution

### 호스트 nginx 정지 + 컨테이너 nginx로 교체

기능 동등성 확인 후 영구 정지.

```
$ sudo systemctl stop nginx
$ sudo systemctl disable nginx
$ sudo ss -tlnp 'sport = :80'   # 비어 있으면 OK

$ cd ~/nutriagentpjt
$ sudo docker compose up -d
$ curl -sI http://13.220.247.35/   # 컨테이너 nginx가 응답
Server: nginx/1.29.8
```

호스트 nginx의 모든 트래픽을 컨테이너 nginx가 받도록 바꿨다. 8080 외부 차단은 그대로 두고, 80 단일 진입점이 동일 docker 네트워크 안의 Spring 컨테이너로 프록시한다.

### CD에 frontend 빌드 단계 추가

```diff
 docker compose build --no-cache spring
 docker compose build fastapi
+docker compose build frontend
 docker compose up -d --force-recreate
+echo "[cd] frontend logs (tail 20)"
+docker compose logs --tail=20 frontend || true
```

이제 어떤 서비스가 추가되든 명시적으로 build 라인을 쓰는 규칙으로 굳혔다. 진단 로그도 같이 늘려서 다음 사고에 가장 먼저 보고 싶은 것 — 컨테이너 ID, 시작 직후 로그 — 가 CD 출력에 자동으로 남도록 했다.

### 진단을 결정적으로 — `git pull` → `fetch + reset --hard`

같은 시기에 CD 스크립트도 결정적으로 만들었다. 이전엔 `git pull origin main` 한 줄이었다. EC2 작업 디렉터리에 누군가 손댄 흔적, 중간 merge 상태, untracked 파일이 남아 있으면 pull은 비결정적으로 실패한다.

```diff
-echo "[cd] git pull"
-git pull origin main
+echo "[cd] sync to origin/main"
+git fetch origin main
+git reset --hard origin/main
+git clean -fd
 echo "[cd] HEAD: $(git rev-parse --short HEAD) $(git log -1 --pretty=%s)"
```

`git clean -fd`는 `-x`를 빼서 `.gitignore`에 등록된 `.env` 같은 운영 파일은 보존한다.

### 배포 검증 루틴 — hash와 Last-Modified

CD가 success를 찍어도 그 자체로 배포 성공을 의미하지 않는다는 걸 두 사고가 가르쳤다. 이후 모든 배포는 다음 두 가지를 외부에서 직접 확인하는 단계로 끝낸다.

```
$ curl -sI http://13.220.247.35/ | grep -i last-modified
$ curl -s http://13.220.247.35/ | grep -oE 'assets/index-[^"]+\.js'
```

`Last-Modified`가 CD 종료 시각과 일치하고 번들 hash가 직전과 다르면, 그제서야 "배포되었다"라고 말한다.

## Takeaway

같은 호스트에 시스템 서비스와 컨테이너를 동거시키는 EC2 single-host 구성에서, CD success는 배포 성공의 충분조건이 아니다.

- **80 같은 well-known 포트는 호스트 OS의 시스템 데몬이 이미 잡고 있을 수 있다.** `lsof -i :80`이 컨테이너가 아닌 system pid를 가리키면, 그것이 외부 → 내부의 유일한 경로일 가능성을 먼저 의심한다. 무턱대고 정지하지 않는다.
- **`docker compose up -d`는 빌드를 보장하지 않는다.** 첫 배포에서 동작했다고 다음 배포도 동작한다는 뜻이 아니다. CD 스크립트는 모든 서비스에 대해 `docker compose build <service>`를 명시한다.
- **`docker-compose`(v1)와 `docker compose`(v2)는 다른 도구다.** v1은 BuildKit/OCI 이미지에서 `ContainerConfig` KeyError로 죽는다. SSH 수동 작업할 때도 v2 플러그인을 쓴다.
- **CD 스크립트의 git 동기화는 결정적이어야 한다.** `git pull`은 깨끗하지 않은 working tree에서 비결정적으로 실패한다. 단방향 갱신 디렉터리는 `fetch + reset --hard origin/<branch> + clean -fd`로 강제 일치시킨다.
- **외부에서 번들 hash와 Last-Modified를 보는 것이 가장 빠른 배포 검증이다.** GitHub Actions의 success 표시보다 신뢰도가 높다.
