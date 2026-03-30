---
# the default layout is 'page'
icon: fas fa-route
order: 5
---

이 페이지는 아카이브를 추천 읽기 경로로 다시 정리한 안내서입니다. 카테고리와 태그로도 둘러볼 수 있지만, 이 페이지는 사이트 안에서 가장 강한 클러스터를 어떤 순서로 읽으면 좋은지 보여주는 데 초점을 둡니다.

처음 오셨다면 클러스터 하나를 골라 핵심 경로를 순서대로 읽고, 그다음에 관련 트랙으로 가지를 치는 방식이 가장 좋습니다.

## 이 페이지에서 볼 수 있는 경로

- [운영체제](#operating-system)
- [컴퓨터구조](#computer-architecture)
- [시큐어 코딩과 보안](#secure-coding-and-cybersecurity)
- [컴퓨터 네트워크와 인터넷 프로토콜](#computer-networking-and-internet-protocol)

## 운영체제

현대 운영체제가 프로세스, 스레드, 메모리, 동기화, 교착상태, 가상 메모리를 어떻게 다루는지 이해하는 경로입니다.

- **추천 독자 수준**: 입문 ~ 중급
- **추천 시작 글**: [인터럽트, 시스템 구조, 운영체제 아키텍처 - Operating System 1-1]({% link _posts/os/2025-03-04-OS(1-1).md %})
- **같이 읽기 좋은 클러스터**: [컴퓨터구조](#computer-architecture), [컴퓨터 네트워크와 인터넷 프로토콜](#computer-networking-and-internet-protocol)

### 핵심 경로

1. [인터럽트, 시스템 구조, 운영체제 아키텍처 - Operating System 1-1]({% link _posts/os/2025-03-04-OS(1-1).md %})
2. [운영체제의 동작 원리와 자원 관리 - Operating System 1-2]({% link _posts/os/2025-03-08-OS(1-2).md %})
3. [운영체제 서비스와 시스템 콜 인터페이스 - Operating System 2-1]({% link _posts/os/2025-03-10-OS(2-1).md %})
4. [운영체제 설계와 구조의 원리 - Operating System 2-2]({% link _posts/os/2025-03-11-OS(2-2).md %})
5. [프로세스 생성, 종료, IPC의 이해 - Operating System 3-1]({% link _posts/os/2025-03-17-OS(3-1).md %})
6. [프로세스 개념과 메모리 구조 - Operating System 3-2]({% link _posts/os/2025-03-18-OS(3-2).md %})
7. [Operating System(4-1): Multicore Programming, Multithreading, Pthread]({% link _posts/os/2025-03-24-OS(4-1).md %})
8. [Operating System(4-2): Thread Pool]({% link _posts/os/2025-03-25-OS(4-2).md %})
9. [CPU 스케줄링과 다중 처리기 스케줄링 - Operating System 5-1]({% link _posts/os/2025-04-07-OS(5-1).md %})
10. [실시간 스케줄링의 이해 - Operating System 5-2]({% link _posts/os/2025-04-14-OS(5-2).md %})
11. [리눅스와 윈도우 스케줄링 비교 - Operating System 5-3]({% link _posts/os/2025-04-14-OS(5-3).md %})
12. [Operating System(6-1): Critical section, peterson, Synchronization Hardware]({% link _posts/os/2025-04-28-OS(6-1).md %})
13. [Operating System(6-2): Mutex Lock and Semaphore]({% link _posts/os/2025-04-29-OS(6-2).md %})
14. [Operating System(6-3): Monitors, Liveness]({% link _posts/os/2025-05-05-OS(6-3).md %})
15. [Operating System(7-1): Synchronization Examples]({% link _posts/os/2025-05-06-OS(7-1).md %})
16. [Operating System(7-2): Synchronization(Windows, Linux, POSIX)]({% link _posts/os/2025-05-12-OS(7-2).md %})
17. [Operating System(8): Deadlocks]({% link _posts/os/2025-05-19-OS(8).md %})
18. [Operating System(9-1): Main Memory - Contiguous Memory Allocation]({% link _posts/os/2025-05-26-OS(9-1).md %})
19. [Operating System(9-2): Main Memory - Paging]({% link _posts/os/2025-05-26-OS(9-2).md %})
20. [Operating System(9-3): Main Memory - Swapping]({% link _posts/os/2025-05-27-OS(9-3).md %})
21. [가상 메모리와 Demand Paging - Operating System 10-1]({% link _posts/os/2025-06-02-OS(10-1).md %})
22. [페이지 교체와 Page Replacement 알고리즘 - Operating System 10-2]({% link _posts/os/2025-06-03-OS(10-2).md %})
23. [프레임 할당 전략 - Operating System 10-3]({% link _posts/os/2025-06-10-OS(10-3).md %})

### 실습

- [Practice: Kernel Build]({% link _posts/os/2025-03-09-OS(prac_1).md %})

## 컴퓨터구조

명령어, 레지스터, 메모리, 프로세서, 파이프라인, 캐시가 기계 수준에서 어떻게 맞물리는지 이해하는 경로입니다.

- **추천 독자 수준**: 입문 ~ 중급
- **추천 시작 글**: [MIPS 기초: 명령어와 레지스터의 시작 - Computer Architecture 1-1]({% link _posts/ca/2025-03-11-CA(1-1).md %})
- **같이 읽기 좋은 클러스터**: [운영체제](#operating-system), [컴퓨터 네트워크와 인터넷 프로토콜](#computer-networking-and-internet-protocol)

### 핵심 경로

1. [MIPS 기초: 명령어와 레지스터의 시작 - Computer Architecture 1-1]({% link _posts/ca/2025-03-11-CA(1-1).md %})
2. [MIPS 연산과 MARS 시뮬레이션 - Computer Architecture 1-2]({% link _posts/ca/2025-03-18-CA(1-2).md %})
3. [메모리 피연산자와 R/I 타입 명령어 - Computer Architecture 2-1]({% link _posts/ca/2025-03-24-CA(2-1).md %})
4. [MIPS 레지스터와 명령어 형식 - Computer Architecture 2-2]({% link _posts/ca/2025-03-24-CA(2-2).md %})
5. [Chapter 3-1: Logical Operations]({% link _posts/ca/2025-03-31-CA(3-1).md %})
6. [Chapter 3-2: Logical Operations-EXERCISE]({% link _posts/ca/2025-04-01-CA(3-2).md %})
7. [Chapter 4-1: Program Counter(Stack)]({% link _posts/ca/2025-04-07-CA(4-1).md %})
8. [Chapter 4-2: PC Example]({% link _posts/ca/2025-04-08-CA(4-2).md %})
9. [Chapter 5-1: Memory, Word addressing]({% link _posts/ca/2025-04-14-CA(5-1).md %})
10. [워드 주소 지정 연습 - Computer Architecture 5-2]({% link _posts/ca/2025-04-15-CA(5-2).md %})
11. [Chapter 6-1: Processor(1-1)]({% link _posts/ca/2025-04-21-CA(6-1).md %})
12. [Chapter 6-2: Processor(1-2)]({% link _posts/ca/2025-04-22-CA(6-2).md %})
13. [Chapter 7-1: Processor(2-1)]({% link _posts/ca/2025-04-28-CA(7-1).md %})
14. [Chapter 7-2: Processor(2-2)]({% link _posts/ca/2025-04-29-CA(7-2).md %})
15. [Chapter 8-1: Processor(3-1)]({% link _posts/ca/2025-05-05-CA(8-1).md %})
16. [Chapter 9: Processor(4): Pipeline]({% link _posts/ca/2025-05-19-CA(9).md %})
17. [Chapter 10: Processor(5-1): Pipeline register]({% link _posts/ca/2025-05-26-CA(10-1).md %})
18. [Chapter 10: Processor(5-2): Pipeline register]({% link _posts/ca/2025-05-27-CA(10-2).md %})
19. [Chapter 10: Processor(5-3): Hazard]({% link _posts/ca/2025-05-27-CA(10-3).md %})
20. [캐시와 메모리 계층 구조의 이해 - Computer Architecture 11-1]({% link _posts/ca/2025-06-02-CA(11-1).md %})
21. [Chapter 11: Exploiting Memory Hierarchy(2) - Direct Mapped Cache]({% link _posts/ca/2025-06-09-CA(11-2).md %})
22. [Chapter 11: Exploiting Memory Hierarchy(3) - Placement of Cache]({% link _posts/ca/2025-06-09-CA(11-3).md %})
23. [Chapter 11: Exploiting Memory Hierarchy(3-2) - cache for real world]({% link _posts/ca/2025-06-10-CA(11-4).md %})

## 시큐어 코딩과 보안

이 클러스터는 안전한 개발의 기초에서 시작해, 위협 모델링, 인증과 인가, 입력 검증, 웹 취약점까지 이어집니다. 앞부분 글들은 이후 보안 글 전체를 읽기 위한 개념적 기반 역할도 합니다.

- **추천 독자 수준**: 입문 ~ 중급
- **추천 시작 글**: [시큐어 소프트웨어 개발의 기초 - Secure Coding 1]({% link _posts/sc/2025-09-05-SC(1).md %})
- **같이 읽기 좋은 클러스터**: [컴퓨터 네트워크와 인터넷 프로토콜](#computer-networking-and-internet-protocol), [운영체제](#operating-system)

### 핵심 경로

1. [시큐어 소프트웨어 개발의 기초 - Secure Coding 1]({% link _posts/sc/2025-09-05-SC(1).md %})
2. [Secure Coding(1-2) - Korean secure development standards]({% link _posts/sc/2025-09-05-SC(1-2).md %})
3. [Secure Coding(1-3) - Global secure development standards]({% link _posts/sc/2025-09-05-SC(1-3).md %})
4. [Secure Coding(2-1) - SW개발보안 방법론]({% link _posts/sc/2025-09-12-SC(2-1).md %})
5. [Secure Coding(2-2) - 위협모델링 개요]({% link _posts/sc/2025-09-12-SC(2-2).md %})
6. [Secure Coding(2-3) - 위협모델링 실무 적용]({% link _posts/sc/2025-09-12-SC(2-3).md %})
7. [Secure Coding(3-1) - 실습 환경 구축 및 HTTP 구조 이해]({% link _posts/sc/2025-09-17-SC(3-1).md %})
8. [Secure Coding(3-2) - 실습 환경 구축 및 Spring Boot]({% link _posts/sc/2025-09-17-SC(3-2).md %})
9. [Secure Coding(4-1) - 정규식 기본 문법]({% link _posts/sc/2025-09-24-SC(4-1).md %})
10. [Secure Coding(4-2) - 정규식 활용(데이터 검증)]({% link _posts/sc/2025-09-24-SC(4-2).md %})
11. [Secure Coding(4-3) - 정규식 활용(입력값 필터링)]({% link _posts/sc/2025-09-24-SC(4-3).md %})
12. [Secure Coding(5-1) - 인증과 인가]({% link _posts/sc/2025-10-01-SC(5-1).md %})
13. [OAuth2: 권한 위임과 인가 흐름의 이해 - Secure Coding 5-2]({% link _posts/sc/2025-10-01-SC(5-2).md %})
14. [Secure Coding(5-3) - JWT(JSON Web Token)]({% link _posts/sc/2025-10-01-SC(5-3).md %})
15. [Secure Coding(6-1) - ORM]({% link _posts/sc/2025-10-08-SC(6-1).md %})
16. [SQL Injection: 발생 원리와 방어 방법 - Secure Coding 6-2]({% link _posts/sc/2025-10-08-SC(6-2).md %})
17. [Secure Coding(6-3) - Command Injection]({% link _posts/sc/2025-10-08-SC(6-3).md %})
18. [Secure Coding(7-1) - 프론트엔드 데이터 처리]({% link _posts/sc/2025-10-15-SC(7-1).md %})
19. [Secure Coding(7-2) - XSS 진단 및 대응]({% link _posts/sc/2025-10-15-SC(7-2).md %})

## 컴퓨터 네트워크와 인터넷 프로토콜

먼저 네트워크의 핵심 개념을 잡고, 그다음 전송 계층과 네트워크 계층으로 내려간 뒤, 마지막에 프로토콜 중심 심화로 들어가는 경로입니다.

- **추천 독자 수준**: 입문 ~ 중급
- **추천 시작 글**: [컴퓨터 네트워크 입문: 인터넷 구조와 패킷 전달 - Computer Networking 1]({% link _posts/cn/2025-03-10-CN(1).md %})
- **같이 읽기 좋은 클러스터**: [운영체제](#operating-system), [시큐어 코딩과 보안](#secure-coding-and-cybersecurity)

### 네트워크 기초 경로

1. [컴퓨터 네트워크 입문: 인터넷 구조와 패킷 전달 - Computer Networking 1]({% link _posts/cn/2025-03-10-CN(1).md %})
2. [애플리케이션 계층 기초: socket, HTTP, web cache - Computer Networking 2]({% link _posts/cn/2025-03-11-CN(2).md %})
3. [애플리케이션 계층 심화: DNS와 P2P - Computer Networking 3]({% link _posts/cn/2025-03-17-CN(3).md %})
4. [전송 계층 기초: 멀티플렉싱, 디멀티플렉싱, UDP - Computer Networking 4]({% link _posts/cn/2025-03-24-CN(4).md %})
5. [신뢰적 데이터 전송 rdt의 이해 - Computer Networking 5]({% link _posts/cn/2025-03-25-CN(5).md %})
6. [Computer Networking - Transport layer(3): TCP segment, retransmittion]({% link _posts/cn/2025-03-31-CN(6).md %})
7. [Computer Networking - Transport layer(4): TCP flow control, handshake]({% link _posts/cn/2025-04-01-CN(7).md %})
8. [Computer Networking - Transport layer(5): TCP congestion control]({% link _posts/cn/2025-04-08-CN(8).md %})
9. [Computer Networking - Network layer(1)]({% link _posts/cn/2025-04-28-CN(9).md %})

### 인터넷 프로토콜 심화

1. [Internet Protocol(1) - ARP]({% link _posts/cn-plus/2025-09-01-CN+(1).md %})
2. [Internet Protocol(2) - IP Addressing]({% link _posts/cn-plus/2025-09-15-CN+(2).md %})
3. [Internet Protocol(3) - IP Header & Forwarding]({% link _posts/cn-plus/2025-09-22-CN+(3).md %})
4. [ICMP - Internet Control Message Protocol]({% link _posts/cn-plus/2025-09-29-CN+(4).md %})
5. [UDP - User Datagram Protocol]({% link _posts/cn-plus/2025-10-06-CN+(5).md %})
6. [TCP - Transmission Control Protocol]({% link _posts/cn-plus/2025-10-19-CN+(6).md %})
7. [DHCP - Dynamic Host Configuration Protocol]({% link _posts/cn-plus/2025-10-27-CN+(7).md %})

## 이 페이지 활용법

완전히 처음 시작한다면 클러스터 하나를 골라 앞에서부터 5~10편 정도 순서대로 읽는 것이 가장 좋습니다. 이미 기본기가 있다면 세부 트랙을 활용해 실습, 프로토콜, 시큐어 개발 쪽으로 바로 들어가도 전체 지도를 잃지 않을 수 있습니다.
