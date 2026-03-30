# Premium post editorial plan

## Goal

Make the blog feel like a curated paid technical publication without losing its study-series identity.

The point is not to sound luxurious. The point is to make each important post feel intentionally framed, easy to scan, and worth reading in sequence.

## Editorial principles

1. Lead with the concept, not the chapter token.
2. Treat `description` as the post deck.
3. Open with reader orientation before dense notes begin.
4. End with summary and next reading, not an abrupt stop.
5. Upgrade cornerstone posts first, not the whole archive.
6. Prefer Korean-first titles and descriptions because Korean reader acquisition comes first.

## Retrofit sequence

### Phase 1 - Standardize the rules

- Update `/.sisyphus/POSTS_WORKFLOW.md`
- Update `/.sisyphus/POSTS_WORKFLOW.ko.md`
- Use one title and description formula across new posts

### Phase 2 - Upgrade cornerstone posts

Start with the first or most valuable posts in OS, SC, CA, and CN.

Recommended first pass:

1. `/_posts/os/2025-03-04-OS(1-1).md`
2. `/_posts/os/2025-04-07-OS(5-1).md`
3. `/_posts/os/2025-06-02-OS(10-1).md`
4. `/_posts/sc/2025-09-05-SC(1).md`
5. `/_posts/sc/2025-10-01-SC(5-2).md`
6. `/_posts/sc/2025-10-08-SC(6-2).md`
7. `/_posts/ca/2025-03-11-CA(1-1).md`
8. `/_posts/ca/2025-06-02-CA(11-1).md`
9. `/_posts/cn/2025-03-10-CN(1).md`
10. `/_posts/cn/2025-03-11-CN(2).md`
11. `/_posts/cn-plus/2025-09-01-CN+(1).md`

### Phase 3 - Expand carefully

- Apply the same standard to neighboring posts in the same clusters
- Use `About` and `Series` to point into the upgraded entry posts
- Leave legacy posts alone until there is a real reason to touch them

## Title rewrite formula

Preferred structure:

```text
[Korean-first concept or question]: [specific scope or payoff] - [Series name] [part]
```

Rules:

- keep the concept first
- keep the series identity visible
- keep the wording scannable in home cards and search previews
- do not sound like clickbait
- prefer Korean wording first unless English terminology materially helps search or clarity

## Description formula

Preferred structure:

```text
This post explains [concept], why it matters for [system / implementation / interview], and how it connects to [next concept / larger cluster].
```

Rules:

- 120-160 characters when possible
- one clear payoff sentence
- no filler or vague summary language

For Phase 2 cornerstone rewrites, treat `description` as mandatory.

## 12 real rewrite examples

### 1. Operating system entry post

- File: `/_posts/os/2025-03-04-OS(1-1).md`
- Current title: `[OS] Operating System(1-1): Interrupt, Oranizaion, Architecture`
- Proposed title: `인터럽트, 시스템 구조, 운영체제 아키텍처 - Operating System 1-1`
- Proposed description: `Start the OS series by understanding what the operating system manages, how interrupts drive execution, and why this model matters for every later topic.`

### 2. CPU scheduling

- File: `/_posts/os/2025-04-07-OS(5-1).md`
- Current title: `[OS] Operating System(5-1): CPU Scheduling`
- Proposed title: `CPU 스케줄링: FCFS, SJF, Round Robin의 핵심 - Operating System 5-1`
- Proposed description: `Understand why CPU scheduling matters, how the major algorithms differ, and which trade-offs matter most in operating-system design.`

### 3. Virtual memory

- File: `/_posts/os/2025-06-02-OS(10-1).md`
- Current title: `[OS] Operating System(10-1): Virtual Memory, Demand Paging`
- Proposed title: `가상 메모리와 Demand Paging - Operating System 10-1`
- Proposed description: `Learn how virtual memory creates the illusion of larger memory, what demand paging changes, and why page faults matter in real systems.`

### 4. Secure coding foundation

- File: `/_posts/sc/2025-09-05-SC(1).md`
- Current title: `[Security] Secure Coding(1-1) - SW개발보안 이해`
- Proposed title: `시큐어 소프트웨어 개발의 기초 - Secure Coding 1`
- Proposed description: `Start the secure coding series by understanding what software security tries to prevent, why secure development matters, and how the later topics build on it.`

### 5. OAuth2

- File: `/_posts/sc/2025-10-01-SC(5-2).md`
- Current title: `[Security] Secure Coding(5-2) - OAuth2`
- Proposed title: `OAuth2: 위임 인증이 작동하는 방식 - Secure Coding 5-2`
- Proposed description: `Understand how OAuth2 separates authentication from authorization, why access and refresh tokens exist, and where the flow can fail in practice.`

### 6. SQL injection

- File: `/_posts/sc/2025-10-08-SC(6-2).md`
- Current title: `[Security] Secure Coding(6-2) - SQL Injection`
- Proposed title: `SQL Injection: 발생 원리와 방어 방법 - Secure Coding 6-2`
- Proposed description: `Learn why SQL injection appears, how attackers exploit unsafe query construction, and which defensive patterns actually reduce the risk.`

### 7. Computer architecture entry post

- File: `/_posts/ca/2025-03-11-CA(1-1).md`
- Current title: `[CA] Chapter 1-1: MIPS`
- Proposed title: `MIPS 기초: 컴퓨터구조의 기계 모델 이해 - Computer Architecture 1-1`
- Proposed description: `Use this post to start the architecture series by understanding the MIPS model, why it matters, and how it prepares you for later processor and memory topics.`

### 8. Cache

- File: `/_posts/ca/2025-06-02-CA(11-1).md`
- Current title: `[CA] Chapter 11: Exploiting Memory Hierarchy(1) - Cache`
- Proposed title: `캐시 기초: 메모리 계층 구조가 중요한 이유 - Computer Architecture 11-1`
- Proposed description: `Understand why caches exist, how memory hierarchy shapes performance, and what foundation you need before studying mapped and set-associative cache design.`

### 9. Networking entry post

- File: `/_posts/cn/2025-03-10-CN(1).md`
- Current title: `[CN] Computer Networking(1): Intro`
- Proposed title: `컴퓨터 네트워킹 기초: 이 주제를 시작하는 방법 - Computer Networking 1`
- Proposed description: `Begin the networking series by understanding what the field covers, how the layers connect, and which concepts matter before transport and protocol details.`

### 10. Application layer

- File: `/_posts/cn/2025-03-11-CN(2).md`
- Current title: `[CN] Computer Networking: Application layer(1) - socket, HTTP, cache`
- Proposed title: `애플리케이션 계층 기초: socket, HTTP, cache - Computer Networking 2`
- Proposed description: `Learn how application-layer networking works through sockets, HTTP, and caching, and why these ideas matter before deeper transport-layer study.`

### 11. ARP

- File: `/_posts/cn-plus/2025-09-01-CN+(1).md`
- Current title: `[🌐CN] Internet Protocol(1) - ARP`
- Proposed title: `ARP: IP 주소가 MAC 주소로 이어지는 방식 - Internet Protocol 1`
- Proposed description: `Understand why IP alone is not enough on a real network, how ARP resolves addresses, and where this protocol fits in the larger networking stack.`

## Premium post body shape

Use this structure for new posts and for important rewrites.

1. deck-style opening paragraph
2. `What this post covers`
3. main concept sections
4. example, diagram, code, or comparison
5. `Key takeaways`
6. `Reading flow`

## Risks to avoid

1. Do not mass-retitle the archive without checking permalink behavior.
2. Do not write SEO-bait titles that lose the study-series identity.
3. Do not make the opening too long; the post should still get to substance quickly.

## Success condition

This plan is working if:

- important posts scan cleanly on cards and search previews
- descriptions consistently explain value before the body starts
- the archive feels curated instead of merely complete
- readers can understand what a post gives them before they commit to the full note
