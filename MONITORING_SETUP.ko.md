# 블로그 모니터링 설정 가이드

## 추천안

이 블로그에는 `Umami`보다 `GoatCounter`가 더 잘 맞습니다.

이유는 다음과 같습니다.

1. 현재 테마(Chirpy)가 `GoatCounter analytics`와 `GoatCounter pageviews`를 이미 기본 지원합니다.
2. 개인 기술 블로그에 필요한 `일일 방문자`, `페이지뷰`, `상위 글`, `유입 경로`를 보기에는 기능이 충분합니다.
3. 쿠키 배너 부담이 적고, 운영 난이도도 낮습니다.
4. 지금 레포에서는 `Umami`보다 추가 구현량이 적습니다.

## 이 레포에서 이미 준비된 것

### 설정 키

- `/_config.yml`
  - `analytics.goatcounter.id`
  - `pageviews.provider`

### 테마 내장 include

- `/_includes/analytics/goatcounter.html`
- `/_includes/pageviews/goatcounter.html`
- `/_includes/head.html`
- `/_includes/js-selector.html`

즉, 별도 스크립트 삽입 구조를 새로 만들 필요는 없습니다.

## 권장 운영 방식

### 1단계: 내부 대시보드만 먼저 사용

처음에는 `GoatCounter`를 **내부 모니터링 용도**로만 쓰는 것을 권장합니다.

보는 지표:

- 일일 방문자
- 페이지뷰
- 유입 경로(referrer)
- 상위 글
- 검색/소셜/직접 유입 비중

이 단계에서는 `pageviews.provider`를 비워두고, 공개 조회수는 보여주지 않습니다.

### 2단계: 공개 페이지뷰는 나중에 결정

글마다 조회수를 공개로 보여주는 것은 나중에 판단해도 됩니다.

이 블로그는 현재 `제목`, `설명`, `카테고리`, `시리즈 진입면`을 계속 다듬는 중이라서, 먼저 **내부 데이터로 어떤 글이 실제로 먹히는지** 보는 편이 더 중요합니다.

## 실제 연결 방법

### A. GoatCounter 사이트 생성

1. GoatCounter 계정을 만듭니다.
2. 사이트를 하나 생성합니다.
3. 발급되는 `code`를 확인합니다.

예:

```text
myblog
```

그러면 실제 카운트 엔드포인트는 아래처럼 동작합니다.

```text
https://myblog.goatcounter.com/count
```

### B. `_config.yml`에 입력

```yml
analytics:
  goatcounter:
    id: myblog

pageviews:
  provider:
```

위 상태면:

- GoatCounter 분석 스크립트는 로드됨
- 대시보드에서 방문자/페이지뷰 확인 가능
- 공개 페이지뷰 숫자는 아직 노출되지 않음

### C. 공개 페이지뷰까지 켜고 싶을 때만

```yml
pageviews:
  provider: goatcounter
```

주의:

- 이 레포는 GoatCounter pageviews include는 준비돼 있지만,
- 현재 포스트 템플릿에 `id="pageviews"` 표시 요소는 기본으로 넣지 않은 상태입니다.

즉, **지금 권장 설정은 내부 대시보드 전용**입니다.

## 추천 KPI

처음에는 아래만 보면 충분합니다.

1. 일일 방문자 수
2. 일일 페이지뷰 수
3. 상위 유입 글 10개
4. referrer 상위 목록
5. 시리즈 진입 글(About, Series, Categories, 주요 포스트)의 성과

## 이 블로그에서 특히 볼 만한 페이지

다음 페이지들은 계속 추적할 가치가 높습니다.

- `/`
- `/about/`
- `/series/`
- `/categories/`
- OS/CA/CN/SC의 첫 진입 글
- 최근에 한국어 우선 제목/설명으로 바꾼 글들

## Umami를 지금 추천하지 않는 이유

Umami도 좋은 선택이지만, 이 레포 기준으로는 GoatCounter가 더 자연스럽습니다.

이유:

1. GoatCounter는 현재 테마에서 pageviews까지 연결 경로가 이미 열려 있습니다.
2. Umami는 내부 대시보드 용도로는 좋지만, 이 레포에선 GoatCounter보다 설정 이점이 적습니다.
3. 개인 블로그의 현재 요구사항(일일 방문자/조회수/유입글 확인)에는 GoatCounter만으로 충분합니다.

## 최종 권장값

초기 운영 권장 설정은 아래와 같습니다.

```yml
analytics:
  goatcounter:
    id: YOUR_GOATCOUNTER_CODE

pageviews:
  provider:
```

즉:

- `analytics.goatcounter.id`는 채운다
- `pageviews.provider`는 일단 비워둔다

이 상태가 가장 실용적입니다.
