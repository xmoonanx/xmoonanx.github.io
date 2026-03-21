---
# the default layout is 'page'
icon: fas fa-route
order: 5
---

This page turns the archive into guided reading paths. Categories and tags are still useful for browsing, but this page is for readers who want a recommended route through the strongest clusters on the site.

If you are new here, start with one cluster, follow its core path in order, and only then branch into the related tracks.

## On this page

- [Operating system](#operating-system)
- [Computer architecture](#computer-architecture)
- [Secure coding and cybersecurity](#secure-coding-and-cybersecurity)
- [Computer networking and internet protocol](#computer-networking-and-internet-protocol)

## Operating system

Understand how modern systems manage processes, threads, memory, synchronization, deadlocks, and virtual memory.

- **Intended reader level**: beginner to intermediate
- **Recommended first post**: [Operating System(1-1): Interrupt, Oranizaion, Architecture]({% link _posts/2025-03-04-OS(1-1).md %})
- **Related clusters**: [Computer architecture](#computer-architecture), [Computer networking and internet protocol](#computer-networking-and-internet-protocol)

### Core path

1. [Operating System(1-1): Interrupt, Oranizaion, Architecture]({% link _posts/2025-03-04-OS(1-1).md %})
2. [Operating System(1-2): Operation, Resource Management, Virtualization]({% link _posts/2025-03-08-OS(1-2).md %})
3. [Operating System(2-1): Service, Interface, System calls, Link/Loaders]({% link _posts/2025-03-10-OS(2-1).md %})
4. [Operating System(2-2): Design, Implementation, Structure]({% link _posts/2025-03-11-OS(2-2).md %})
5. [Operating System(3-1): Process Scheduling/Creation/Termination, IPC]({% link _posts/2025-03-17-OS(3-1).md %})
6. [Operating System(3-2): Process]({% link _posts/2025-03-18-OS(3-2).md %})
7. [Operating System(4-1): Multicore Programming, Multithreading, Pthread]({% link _posts/2025-03-24-OS(4-1).md %})
8. [Operating System(4-2): Thread Pool]({% link _posts/2025-03-25-OS(4-2).md %})
9. [Operating System(5-1): CPU Scheduling]({% link _posts/2025-04-07-OS(5-1).md %})
10. [Operating System(5-2): Real-time Scheduling]({% link _posts/2025-04-14-OS(5-2).md %})
11. [Operating System(5-3): Scheduling: Linux,Window]({% link _posts/2025-04-14-OS(5-3).md %})
12. [Operating System(6-1): Critical section, peterson, Synchronization Hardware]({% link _posts/2025-04-28-OS(6-1).md %})
13. [Operating System(6-2): Mutax lock, Semaphore]({% link _posts/2025-04-29-OS(6-2).md %})
14. [Operating System(6-3): Monitors, Liveness]({% link _posts/2025-05-05-OS(6-3).md %})
15. [Operating System(7-1): Synchronization Examples]({% link _posts/2025-05-06-OS(7-1).md %})
16. [Operating System(7-2): Synchronization(Windows, Linux, POSIX)]({% link _posts/2025-05-12-OS(7-2).md %})
17. [Operating System(8): Deadlocks]({% link _posts/2025-05-19-OS(8).md %})
18. [Operating System(9-1): Main Memory - Contiguous Memory Allocation]({% link _posts/2025-05-26-OS(9-1).md %})
19. [Operating System(9-2): Main Memory - Paging]({% link _posts/2025-05-26-OS(9-2).md %})
20. [Operating System(9-3): Main Memory - Swapping]({% link _posts/2025-05-27-OS(9-3).md %})
21. [Operating System(10-1): Virtual Memory, Demand Paging]({% link _posts/2025-06-02-OS(10-1).md %})
22. [Operating System(10-2): Page Replacement]({% link _posts/2025-06-03-OS(10-2).md %})
23. [Operating System(10-3): Allocation of Frame]({% link _posts/2025-06-10-OS(10-3).md %})

### Practice

- [Practice: Kernel Build]({% link _posts/2025-03-09-OS(prac_1).md %})

## Computer architecture

Learn how instructions, registers, memory, processors, pipelines, and caches fit together from a machine-level point of view.

- **Intended reader level**: beginner to intermediate
- **Recommended first post**: [Chapter 1-1: MIPS]({% link _posts/2025-03-11-CA(1-1).md %})
- **Related clusters**: [Operating system](#operating-system), [Computer networking and internet protocol](#computer-networking-and-internet-protocol)

### Core path

1. [Chapter 1-1: MIPS]({% link _posts/2025-03-11-CA(1-1).md %})
2. [Chapter 1-2: MIPS(MAPS)]({% link _posts/2025-03-18-CA(1-2).md %})
3. [Chapter 2-1: Memory Operands, R/I-type]({% link _posts/2025-03-24-CA(2-1).md %})
4. [Chapter 2-2: MIPS Registers]({% link _posts/2025-03-24-CA(2-2).md %})
5. [Chapter 3-1: Logical Operations]({% link _posts/2025-03-31-CA(3-1).md %})
6. [Chapter 3-2: Logical Operations-EXERCISE]({% link _posts/2025-04-01-CA(3-2).md %})
7. [Chapter 4-1: Program Counter(Stack)]({% link _posts/2025-04-07-CA(4-1).md %})
8. [Chapter 4-2: PC Example]({% link _posts/2025-04-08-CA(4-2).md %})
9. [Chapter 5-1: Memory, Word addressing]({% link _posts/2025-04-14-CA(5-1).md %})
10. [Chapter 5-2: Word addressing Exercies]({% link _posts/2025-04-15-CA(5-2).md %})
11. [Chapter 6-1: Processor(1-1)]({% link _posts/2025-04-21-CA(6-1).md %})
12. [Chapter 6-2: Processor(1-2)]({% link _posts/2025-04-22-CA(6-2).md %})
13. [Chapter 7-1: Processor(2-1)]({% link _posts/2025-04-28-CA(7-1).md %})
14. [Chapter 7-2: Processor(2-2)]({% link _posts/2025-04-29-CA(7-2).md %})
15. [Chapter 8-1: Processor(3-1)]({% link _posts/2025-05-05-CA(8-1).md %})
16. [Chapter 9: Processor(4): Pipeline]({% link _posts/2025-05-19-CA(9).md %})
17. [Chapter 10: Processor(5-1): Pipeline register]({% link _posts/2025-05-26-CA(10-1).md %})
18. [Chapter 10: Processor(5-2): Pipeline register]({% link _posts/2025-05-27-CA(10-2).md %})
19. [Chapter 10: Processor(5-3): Hazard]({% link _posts/2025-05-27-CA(10-3).md %})
20. [Chapter 11: Exploiting Memory Hierarchy(1) - Cache]({% link _posts/2025-06-02-CA(11-1).md %})
21. [Chapter 11: Exploiting Memory Hierarchy(2) - Direct Mapped Cache]({% link _posts/2025-06-09-CA(11-2).md %})
22. [Chapter 11: Exploiting Memory Hierarchy(3) - Placement of Cache]({% link _posts/2025-06-09-CA(11-3).md %})
23. [Chapter 11: Exploiting Memory Hierarchy(3-2) - cache for real world]({% link _posts/2025-06-10-CA(11-4).md %})

## Secure coding and cybersecurity

This cluster starts from secure development fundamentals, then moves through threat modeling, authentication, validation, input handling, and representative web-application vulnerabilities. The first few posts also serve as the conceptual security baseline for the rest of the track.

- **Intended reader level**: beginner to intermediate
- **Recommended first post**: [Secure Coding(1-1) - SW개발보안 이해]({% link _posts/2025-09-05-SC(1).md %})
- **Related clusters**: [Computer networking and internet protocol](#computer-networking-and-internet-protocol), [Operating system](#operating-system)

### Core path

1. [Secure Coding(1-1) - SW개발보안 이해]({% link _posts/2025-09-05-SC(1).md %})
2. [Secure Coding(1-2) - SW개발보안 국내기준]({% link _posts/2025-09-05-SC(1-2).md %})
3. [Secure Coding(1-3) - SW개발보안 국외기준]({% link _posts/2025-09-05-SC(1-3).md %})
4. [Secure Coding(2-1) - SW개발보안 방법론]({% link _posts/2025-09-12-SC(2-1).md %})
5. [Secure Coding(2-2) - 위협모델링 개요]({% link _posts/2025-09-12-SC(2-2).md %})
6. [Secure Coding(2-3) - 위협모델링 실무 적용]({% link _posts/2025-09-12-SC(2-3).md %})
7. [Secure Coding(3-1) - 실습 환경 구축 및 HTTP 구조 이해]({% link _posts/2025-09-17-SC(3-1).md %})
8. [Secure Coding(3-2) - 실습 환경 구축 및 Spring Boot]({% link _posts/2025-09-17-SC(3-2).md %})
9. [Secure Coding(4-1) - 정규식 기본 문법]({% link _posts/2025-09-24-SC(4-1).md %})
10. [Secure Coding(4-2) - 정규식 활용(데이터 검증)]({% link _posts/2025-09-24-SC(4-2).md %})
11. [Secure Coding(4-3) - 정규식 활용(입력값 필터링)]({% link _posts/2025-09-24-SC(4-3).md %})
12. [Secure Coding(5-1) - 인증과 인가]({% link _posts/2025-10-01-SC(5-1).md %})
13. [Secure Coding(5-2) - OAuth2]({% link _posts/2025-10-01-SC(5-2).md %})
14. [Secure Coding(5-3) - JWT(JSON Web Token)]({% link _posts/2025-10-01-SC(5-3).md %})
15. [Secure Coding(6-1) - ORM]({% link _posts/2025-10-08-SC(6-1).md %})
16. [Secure Coding(6-2) - SQL Injection]({% link _posts/2025-10-08-SC(6-2).md %})
17. [Secure Coding(6-3) - Command Injection]({% link _posts/2025-10-08-SC(6-3).md %})
18. [Secure Coding(7-1) - 프론트엔드 데이터 처리]({% link _posts/2025-10-15-SC(7-1).md %})
19. [Secure Coding(7-2) - XSS 진단 및 대응]({% link _posts/2025-10-15-SC(7-2).md %})

## Computer networking and internet protocol

Start with core networking concepts first, then branch into transport and network layers, and finally move into the protocol-focused deep dive.

- **Intended reader level**: beginner to intermediate
- **Recommended first post**: [Computer Networking(1): Intro]({% link _posts/2025-03-10-CN(1).md %})
- **Related clusters**: [Operating system](#operating-system), [Secure coding and cybersecurity](#secure-coding-and-cybersecurity)

### Networking fundamentals

1. [Computer Networking(1): Intro]({% link _posts/2025-03-10-CN(1).md %})
2. [Computer Networking: Application layer(1) - soket, HTTP, cache]({% link _posts/2025-03-11-CN(2).md %})
3. [Computer Networking - Application layer(2): DNS, P2P]({% link _posts/2025-03-17-CN(3).md %})
4. [Computer Networking - Transport layer(1): Multi/Demulti, UDP]({% link _posts/2025-03-24-CN(4).md %})
5. [Computer Networking - Transport layer(2): rdt]({% link _posts/2025-03-25-CN(5).md %})
6. [Computer Networking - Transport layer(3): TCP segment, retransmittion]({% link _posts/2025-03-31-CN(6).md %})
7. [Computer Networking - Transport layer(4): TCP flow control, handshake]({% link _posts/2025-04-01-CN(7).md %})
8. [Computer Networking - Transport layer(5): TCP congestion control]({% link _posts/2025-04-08-CN(8).md %})
9. [Computer Networking - Network layer(1)]({% link _posts/2025-04-28-CN(9).md %})

### Internet protocol deep dive

1. [Internet Protocol(1) - ARP]({% link _posts/2025-09-01-CN+(1).md %})
2. [Internet Protocol(2) - IP Addressing]({% link _posts/2025-09-15-CN+(2).md %})
3. [Internet Protocol(3) - IP Header & Forwarding]({% link _posts/2025-09-22-CN+(3).md %})
4. [ICMP - Internet Control Message Protocol]({% link _posts/2025-09-29-CN+(4).md %})
5. [UDP - User Datagram Protocol]({% link _posts/2025-10-06-CN+(5).md %})
6. [TCP - Transmission Control Protocol]({% link _posts/2025-10-19-CN+(6).md %})
7. [DHCP - Dynamic Host Configuration Protocol]({% link _posts/2025-10-27-CN+(7).md %})

## How to use this page

If you are starting from scratch, pick one cluster and follow the first 5-10 posts in order. If you already know the fundamentals, use the subtracks to jump into practice, protocol detail, or secure development topics without losing the larger map.
