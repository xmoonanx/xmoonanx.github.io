---
title: "[🔧Troubleshooting] Spring → FastAPI 프록시에서 JSESSIONID 전달 누락 버그"
description: "Spring Boot가 FastAPI 프록시 역할을 할 때 JSESSIONID를 하위 서비스로 전달하지 않아 발생한 401 버그 — 원인 분석부터 MockMvc 테스트 함정까지 정리합니다."

categories: [Troubleshooting, Spring]
tags:
  - [Spring, FastAPI, Session, Proxy, MockMvc, Testing]
toc: true
toc_sticky: true

date: 2026-04-21
last_modified_at: 2026-04-21
image: ../assets/img/Spring/image.png
---

*Spring Boot가 FastAPI 앞단 프록시 역할을 하는 구조에서, FastAPI가 Spring을 역호출할 때 **401**이 터지는 버그를 마주쳤다. 원인은 단순했지만 — `JSESSIONID`를 FastAPI로 전달하지 않은 것 — MockMvc에서 재현하는 과정에서 예상치 못한 함정이 있었다. 분석부터 테스트 픽스까지 기록한다.*

---

## What this post covers

- 문제 상황 및 요청 흐름 정리
- `JSESSIONID` 미전달의 근본 원인
- `HttpServletRequest`로 쿠키 포워딩 구현
- MockMvc에서 `getRequestedSessionId()`가 `null`을 반환하는 이유와 해결법

---

## Problem

Spring Boot가 FastAPI 앞단 프록시 역할을 하는 구조에서, 챗봇 메시지 전송 API(`POST /sessions/{id}/messages`)를 호출하면 **FastAPI가 Spring의 onboarding 엔드포인트를 역으로 호출할 때 <span style="color: #cc0000">401</span>** 이 반환되는 문제가 발생했다.

흐름을 정리하면 다음과 같다.

```
브라우저 ──JSESSIONID──► Spring :8080
                          │
                          │ (JSESSIONID 미전달)
                          ▼
                       FastAPI :8000
                          │
              onboarding tool 호출 시
                          │ JSESSIONID=""
                          ▼
                       Spring /onboarding
                          │
                          └─► 401 Unauthorized (세션 없음)
```

FastAPI의 `send_message` 엔드포인트는 `JSESSIONID` 쿠키를 파라미터로 받아 onboarding tool의 context에 전달한다.

```python
# router.py
jsessionid: str | None = Cookie(None, alias="JSESSIONID")
```

onboarding tool은 이 값을 Spring 역호출 시 쿠키로 사용한다.

```python
# tools/onboarding.py
cookies={"JSESSIONID": context.get("jsessionid", "")}
```

문제는 Spring `ChatProxyController`가 브라우저 요청의 `JSESSIONID`를 FastAPI로 **전달하지 않았다** 는 것이다. FastAPI가 받는 `jsessionid`는 항상 `None`이었고, `context.get("jsessionid", "")` 는 빈 문자열을 반환했다.

## Root Cause

`ChatProxyController`의 `sendMessage`, `streamMessage`는 FastAPI로 보내는 헤더를 직접 구성한다. 당시 코드는 `X-Guest-Id`와 `X-Internal-Key`만 설정했고, **브라우저가 보낸 `JSESSIONID`를 `Cookie` 헤더로 포워딩하는 로직이 없었다.**

```java
// 수정 전: JSESSIONID 없음
private HttpHeaders buildGuestHeaders(String guestId) {
    HttpHeaders headers = new HttpHeaders();
    headers.set("X-Guest-Id", guestId);
    headers.set("X-Internal-Key", internalApiKey);
    return headers;
}
```

Spring은 자체 `HttpSession`에서 `guestId`를 꺼내는 방식이라 `JSESSIONID`를 직접 다루지 않아도 됐다. 하지만 **FastAPI가 그 값을 다시 Spring으로 전달해야 하는 상황** 을 고려하지 못했다.

## Solution

`HttpServletRequest`를 컨트롤러 파라미터로 주입받아, **<span style="color: #008000">`getRequestedSessionId()`</span>** 로 브라우저 세션 ID를 추출한 뒤 FastAPI 요청의 `Cookie` 헤더에 추가했다.

```java
// ChatProxyController.java
@PostMapping("/sessions/{sessionId}/messages")
public ResponseEntity<String> sendMessage(
        @GuestId String guestId,
        @PathVariable Long sessionId,
        @RequestBody Map<String, Object> body,
        HttpServletRequest servletRequest) {          // 추가

    HttpHeaders headers = buildGuestHeaders(guestId);
    headers.setContentType(MediaType.APPLICATION_JSON);
    forwardSessionCookie(servletRequest, headers);   // 추가
    ...
}

private void forwardSessionCookie(HttpServletRequest servletRequest, HttpHeaders headers) {
    String jsessionid = servletRequest.getRequestedSessionId();
    if (jsessionid != null) {
        headers.set(HttpHeaders.COOKIE, "JSESSIONID=" + jsessionid);
    }
}
```

SSE 스트림 엔드포인트(`streamMessage`)는 `RequestCallback` 람다 내부에서 헤더를 설정하므로, **<span style="color: #008000">람다 캡처를 위해 로컬 변수로 먼저 추출</span>** 해야 한다.

```java
@PostMapping(value = "/sessions/{sessionId}/messages/stream", ...)
public ResponseEntity<StreamingResponseBody> streamMessage(...,
        HttpServletRequest servletRequest) {

    String jsessionid = servletRequest.getRequestedSessionId(); // 람다 밖에서 캡처

    StreamingResponseBody stream = outputStream -> {
        chatRestTemplate.execute(url, HttpMethod.POST,
            request -> {
                ...
                if (jsessionid != null) {
                    request.getHeaders().set(HttpHeaders.COOKIE, "JSESSIONID=" + jsessionid);
                }
            }, ...);
    };
}
```

## Testing Gotcha: MockMvc에서 `getRequestedSessionId()` 는 null

테스트에서 `.session(authSession)`으로 세션을 주입하면 `getRequestedSessionId()`가 **`null`을 반환** 한다.

`MockHttpServletRequest.getRequestedSessionId()`는 `requestedSessionId` 필드를 그대로 반환하는데, MockMvc가 `.session()`을 처리할 때 이 필드를 자동으로 채우지 않는다. **<span style="color: #cc0000">실제 서블릿 환경에서는 `JSESSIONID` 쿠키를 파싱해 이 값을 설정하지만, MockMvc는 그 과정을 생략한다.</span>**

> **해결:** `MockHttpSession`을 **고정 ID로 생성**하고, `RequestPostProcessor`로 **<span style="color: #008000">`requestedSessionId`를 명시적으로 설정</span>** 한다.

```java
// 테스트 setUp
private static final String SESSION_ID = "test-jsessionid-001";

authSession = new MockHttpSession(null, SESSION_ID); // 고정 ID 지정
authSession.setAttribute("GUEST_ID", GUEST_ID);
```

```java
// 테스트 요청
mockMvc.perform(post("/api/v1/chat/sessions/1/messages")
        .session(authSession)
        .with(req -> { req.setRequestedSessionId(SESSION_ID); return req; }) // 명시적 설정
        .contentType(MediaType.APPLICATION_JSON)
        .content("{\"message\":\"안녕\"}"))
```

그런 다음 헤더 캡처 후 검증:

```java
assertThat(headers.getFirst(HttpHeaders.COOKIE)).contains("JSESSIONID=" + SESSION_ID);
```

## Takeaway

- Spring이 직접 세션 인증을 처리하더라도, **<span style="color: #008000">하위 서비스가 그 세션을 역으로 사용해야 하는 경우</span>** 는 쿠키 포워딩을 명시적으로 구현해야 한다.
- **<span style="color: #cc0000">MockMvc는 실제 서블릿 컨테이너의 쿠키 파싱 과정을 생략한다.</span>** `getRequestedSessionId()`처럼 쿠키에서 파생되는 값은 `RequestPostProcessor`로 수동 설정해야 테스트가 동작한다.
