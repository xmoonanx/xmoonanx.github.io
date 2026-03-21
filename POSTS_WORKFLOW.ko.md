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

가능하면 가장 가까운 실제 글을 먼저 복사하는 것이 제일 좋습니다. 그래도 시작점이 필요하면 아래 형태를 씁니다.

```yaml
---
title: "[OS] Operating System(11-1): Topic title"
date: 2026-03-21 00:00:00 +0900
categories: [CS, Operating System, OS]
tags:
  - [CS, OS, Topic]
toc: true
toc_sticky: true
---

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
