# POSTS WORKFLOW (KO)

## 목적

이 저장소의 `/_posts/`는 단순한 날짜순 글 보관함이 아니라, 학습 시리즈 원본 저장소처럼 관리하는 것이 맞습니다.

- `/_posts/`는 발행했거나 곧 발행할 글을 둡니다.
- `/_tabs/series.md`는 주요 클러스터의 추천 읽기 순서를 관리합니다.
- `categories`는 주제 계층을 담당합니다.
- `tags`는 탐색과 검색을 돕지만, 정식 읽기 순서를 정의하지는 않습니다.

## `/_posts/`에 들어가야 하는 것

다음처럼 실제 포스트로 동작해야 하는 콘텐츠만 둡니다.

- `OS`, `CA`, `SC`, `CN`, `CN+`, `CV`, `JAVA`, `CD` 같은 클러스터 글
- 공개 permalink를 가져야 하는 드문 standalone reference note

다음은 `/_posts/`에 두지 않습니다.

- 아직 발행 준비가 안 된 초안
- 계획 메모
- 테스트 가이드나 repo 운영 문서
- 임시 scratch 파일

미완성 글은 `/_drafts/`를 쓰고, 운영 문서는 `/_posts/` 밖에 둡니다.

## 실제 폴더 구조

이제 `/_posts/`는 작성 편의를 위해 클러스터별 하위 폴더로 정리합니다.

```text
_posts/
  os/
  ca/
  sc/
  cn/
  cn-plus/
  cv/
  java/
  cd/
  spring/
  data-structures/
```

실제 클러스터에 속하지 않는 standalone 글만 예외적으로 `/_posts/` 루트에 둡니다.

## 파일명 규칙

기존 규칙을 유지합니다.

```text
YYYY-MM-DD-SUBJECT(token).md
```

예시:

- `2025-03-04-OS(1-1).md`
- `2025-06-02-CA(11-1).md`
- `2025-09-05-SC(1).md`
- `2025-03-09-OS(prac_1).md`

기존 포스트 파일은 가볍게 이름 바꾸지 않습니다. 현재 slug와 내부 링크가 파일명에 의존합니다.

## 분류 모델

### 1. Series 페이지 = 공식 읽기 순서

`/_tabs/series.md`가 주요 학습 경로의 기준 문서입니다.

- 이미 Series에 올라간 major cluster에 새 글이 들어가면 `/_tabs/series.md`도 같은 변경에서 같이 수정합니다.
- 독자가 무엇을 먼저, 다음에, 나중에 읽을지 정하는 곳은 categories가 아니라 series 페이지입니다.

### 2. Categories = 주제 계층

categories는 읽기 순서가 아니라 주제 구조를 나타냅니다.

예시:

```yaml
categories: [CS, Operating System, OS]
categories: [CS, Computer Architecture, CA, Assembly language]
categories: [Security, Secure Coding]
categories: [Framework, Spring]
```

수정하는 글과 같은 클러스터의 기존 패턴을 그대로 따릅니다. 글 하나 쓰면서 전역 category 정리를 시작하지 않습니다.

### 3. Tags = 탐색

tags는 검색과 탐색을 위한 보조 정보입니다.

- 같은 클러스터의 인접 글 스타일을 복사합니다.
- 범위는 로컬하게 유지합니다.
- 글 하나 추가하면서 전체 태그 체계를 동시에 정리하지 않습니다.

## 기본 작성 흐름

새 글을 추가할 때는 다음 순서로 가면 됩니다.

1. 기존 규칙대로 `/_posts/`에 파일을 만듭니다.
2. 이미 폴더가 있는 클러스터라면 해당 하위 폴더에 바로 넣습니다.
3. 같은 클러스터의 최근 글에서 front matter 스타일을 복사합니다.
4. 본문을 작성합니다.
5. 이 글이 기존 series 클러스터에 들어가는지 판단합니다.
6. 들어간다면 `/_tabs/series.md`를 같은 변경에서 같이 수정합니다.
7. 글이 시퀀스 중간에 있다면 이전/다음/관련 글 흐름도 같이 보강합니다.
8. 발행 전 평소 검증 명령을 실행합니다.

## 프리미엄 에디토리얼 기준

글을 단순한 수업 필기보다, 돈 내고 읽을 만한 정리 노트처럼 보이게 만들고 싶다면 아래 기준을 기본값으로 삼습니다.

### 1. 제목 전략

중요 글은 시퀀스 표기보다 개념을 먼저 보여주는 편이 좋습니다.

이 블로그는 한국어 검색 유입이 우선이므로, visible title은 기본적으로 한국어 우선으로 작성합니다.

- 추천: `핵심 개념: 구체 포인트 - 시리즈 파트`
- 비추천: 중요한 글인데도 `[OS] Operating System(10-1): ...` 같은 내부 시퀀스 정보만 앞에 강하게 보이는 형태
- 시리즈 번호는 버리지 말고, 가능하면 제목 뒤로 보내서 학습 경로는 유지하고 첫인상은 개선합니다.
- 영어 용어는 검색이나 기술적 정확성을 높일 때만 보조적으로 섞습니다.

예시:

- `CPU Scheduling: FCFS, SJF, Round Robin의 핵심 - Operating System 5-1`
- `OAuth2: 위임 인증이 작동하는 방식 - Secure Coding 5-2`
- `Virtual Memory and Demand Paging - Operating System 10-1`
- `CPU 스케줄링: FCFS, SJF, Round Robin의 핵심 - Operating System 5-1`
- `OAuth2: 위임 인증이 작동하는 방식 - Secure Coding 5-2`
- `가상 메모리와 Demand Paging - Operating System 10-1`

프리미엄하게 느껴지는 제목의 조건은 다음과 같습니다.

- 훑어볼 때 바로 개념이 보일 것
- 독자가 얻는 범위나 payoff가 드러날 것
- 내부 노트용 표기만 앞에 오지 않을 것
- 시리즈 흐름은 남기되 제목 전체를 지배하지 않을 것
- 실제 검색 독자의 언어와 제목 언어가 맞을 것

### 2. description 전략

major cluster의 새 글과 cornerstone 리라이트 글은 `description`을 사실상 필수로 취급합니다.

`description`은 headline 아래에 붙는 editorial deck이라고 생각하면 됩니다. 아래 세 가지를 짧게 설명해야 합니다.

1. 이 글이 무엇을 다루는지
2. 왜 중요한지
3. 더 큰 클러스터나 다음 개념과 어떻게 이어지는지

실전 규칙:

- 가능하면 120-160자 안팎으로 씁니다.
- 1-2문장으로 끝냅니다.
- `이 글은 X를 설명합니다` 같은 밋밋한 문장을 피합니다.
- 추상적인 설명보다 독자가 얻는 실질적 이득을 씁니다.

공식:

```text
이 글은 [개념]을 설명하고, 그것이 [시스템 / 면접 / 구현]에서 왜 중요한지, 그리고 [다음 개념 / 더 큰 시리즈]와 어떻게 이어지는지 정리한다.
```

예시:

```yaml
description: "CPU 스케줄링이 왜 필요한지, FCFS·SJF·Round Robin이 어떻게 다른지, 운영체제 설계에서 어떤 trade-off를 봐야 하는지 정리합니다."
```

### 3. 도입부 구조

첫 화면에서 독자를 먼저 방향 잡아줘야 합니다.

권장 순서:

1. deck 성격의 짧은 도입 문단
2. `What this post covers` 또는 `이 글에서 다루는 내용`
3. 본격 설명

중요 글은 `> 수업 정리` 한 줄이나 bare chapter label만 두고 바로 본론으로 들어가지 않는 편이 좋습니다.

### 4. 프리미엄 스터디 노트 템플릿

major cluster의 새 글과 핵심 글 리라이트에는 아래 구조를 기본으로 사용합니다.

```yaml
---
title: "CPU Scheduling: FCFS, SJF, Round Robin의 핵심 - Operating System 5-1"
description: "CPU 스케줄링이 왜 필요한지, 대표 알고리즘이 어떻게 다른지, 운영체제 설계에서 어떤 평가 기준이 중요한지 정리합니다."
date: 2026-03-30 00:00:00 +0900
categories: [CS, Operating System, OS]
tags:
  - [CS, OS, CPU Scheduling]
toc: true
toc_sticky: true
---

> 이 글은 CPU scheduling이 왜 필요한지, 대표 알고리즘이 무엇을 해결하는지, fairness·throughput·response time을 어떻게 비교해야 하는지 정리한다.

## What this post covers

- 왜 scheduling이 필요한가
- 대표 알고리즘은 어떻게 다른가
- 실전에서는 어떤 trade-off를 봐야 하는가

## Core concept

핵심 개념을 먼저 설명합니다.

## Example or breakdown

그림, 코드, 표, 단계별 비교를 넣습니다.

## Key takeaways

- 핵심 아이디어를 요약하고
- 가장 중요한 trade-off를 짚고
- 다음 개념으로 연결합니다.

## Reading flow

- Previous: `...`
- Next: `...`
- Series: `/series/`
```

### 5. 리라이트 우선순위

전체 아카이브를 한 번에 뜯어고치지 않습니다.

우선순위는 다음이 좋습니다.

1. major cluster의 첫 글
2. scheduling, paging, cache, OAuth2, JWT, SQL injection 같은 고신호 개념 글
3. practice bridge 글
4. 나머지는 실제로 손댈 일이 생길 때만 점진적으로 전환

### 6. 프리미엄 = 화려함이 아님

이 저장소에서 프리미엄한 느낌은 다음에서 나옵니다.

- 강한 framing
- 훑어보기 쉬운 제목과 description
- 일정한 section rhythm
- 깔끔한 요약
- 다음 읽을 글 안내

반대로 과한 카피, 긴 서론, 잡지풍 과장은 이 repo와 잘 맞지 않습니다.

## 글 수가 늘어날 때의 운영 규칙

### 큰 클러스터

이미 코스처럼 동작하는 클러스터는 새 글도 항상 경로의 일부로 취급합니다.

- Operating System
- Computer Architecture
- Secure Coding / Cybersecurity
- Computer Networking / Internet Protocol

이 클러스터들은:

- 매번 `/_tabs/series.md`를 갱신하고
- 기존 파일명/카테고리 패턴을 유지하고
- 글 하나를 독립 문서보다 읽기 흐름의 일부로 생각하는 것이 좋습니다.

### 작은 클러스터

`CV`, `JAVA`, `CD`, 혹은 one-off framework 글처럼 아직 작은 묶음은:

- 해당 클러스터 폴더 아래에 계속 작성하되
- categories와 tags를 일관되게 유지하고
- 시리즈로 묶을 만큼 경로가 생겼을 때만 `/_tabs/series.md`에 올립니다.

## 바로 복사해서 쓰는 템플릿

가능하면 가장 가까운 실제 글을 먼저 복사하는 것이 제일 좋습니다. 그래도 시작점이 필요하면 major cluster에서는 아래 형태를 기본값으로 씁니다.

```yaml
---
title: "핵심 개념: 구체 포인트 - Operating System 11-1"
description: "이 글이 무엇을 다루고 왜 중요한지, 그리고 더 큰 클러스터와 어떻게 이어지는지 짧게 설명합니다."
date: 2026-03-21 00:00:00 +0900
categories: [CS, Operating System, OS]
tags:
  - [CS, OS, Topic]
toc: true
toc_sticky: true
---

> 본문 앞에 deck 성격의 짧은 도입 문단을 넣어 왜 이 글이 중요한지 먼저 설명합니다.

## What this post covers

이 글이 무엇을 다루는지, 그리고 클러스터 안에서 어디에 위치하는지 짧게 적습니다.

## Core concept

핵심 개념을 설명합니다.

## Example or breakdown

예시, 비교, 코드, 그림, 세부 설명을 넣습니다.

## Reading flow

- Previous: `...`
- Next: `...`
- Series: `/series/`
```

주제에 맞게 cluster token, categories, tags 스타일만 바꿔서 사용하면 됩니다.

이 템플릿 자체를 major cluster의 기본 프리미엄 템플릿으로 유지합니다.

## 클러스터별 실전 기본값

- `OS`: `OS(x-y)` 흐름을 유지하고 core path나 practice path에 연결합니다.
- `CA`: chapter 흐름과 기존 assembly/cache 하위 주제 스타일을 유지합니다.
- `SC`: secure coding 순서를 유지하고, 더 넓은 security 경로와 연결합니다.
- `CN` / `CN+`: networking fundamentals와 protocol deep-dive를 구분해서 `/_tabs/series.md`를 갱신합니다.

## 글 쓰면서 같이 하지 말아야 할 것

일반적인 포스트 작성 작업과 아래 작업은 섞지 않는 것이 좋습니다.

- 보기 좋다는 이유로 옛 파일 이름 바꾸기
- 전체 아카이브 taxonomy 재정리
- repo 운영 문서를 `/_posts/` 안으로 넣기
- categories를 series 페이지 대체재처럼 쓰기
- major cluster에 새 글을 넣어놓고 `/_tabs/series.md`를 안 고치기

## 가장 중요한 기준

어떤 글이 기존 클러스터를 더 깊게 읽게 만드는 글이라면, 그 글은 `/_posts/`에 들어가고 보통 `/_tabs/series.md`도 함께 바뀝니다.

반대로 repo 운영에만 도움이 되는 문서라면 `/_posts/` 밖에 두는 게 맞습니다.

## 현재 폴더 배치 기준

- `/_posts/os/` -> Operating System
- `/_posts/ca/` -> Computer Architecture
- `/_posts/sc/` -> Secure Coding
- `/_posts/cn/` -> Computer Networking fundamentals
- `/_posts/cn-plus/` -> Internet Protocol deep dive
- `/_posts/cv/` -> Computer Vision
- `/_posts/java/` -> Java
- `/_posts/cd/` -> Cloud DB / CD 계열
- `/_posts/spring/` -> Spring
- `/_posts/data-structures/` -> 자료구조 노트
