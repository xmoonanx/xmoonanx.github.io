# 테스트 코드 작성 완벽 가이드

## 목차
1. [테스트 코드란 무엇인가](#1-테스트-코드란-무엇인가)
2. [테스트의 종류](#2-테스트의-종류)
3. [JUnit 5 기초](#3-junit-5-기초)
4. [Mockito로 의존성 분리하기](#4-mockito로-의존성-분리하기)
5. [AssertJ로 검증하기](#5-assertj로-검증하기)
6. [Given-When-Then 패턴](#6-given-when-then-패턴)
7. [테스트 작성 전략](#7-테스트-작성-전략)
8. [실전 패턴과 테크닉](#8-실전-패턴과-테크닉)
9. [자주 하는 실수와 해결법](#9-자주-하는-실수와-해결법)

---

## 1. 테스트 코드란 무엇인가

### 1.1 왜 테스트 코드를 작성하는가?

**테스트 코드의 목적**:
- ✅ **버그 조기 발견**: 프로덕션 배포 전에 문제를 찾음
- ✅ **리팩토링 안전성**: 코드 변경 시 기존 기능이 깨지지 않음을 보장
- ✅ **문서화**: 코드가 어떻게 동작하는지 예제로 보여줌
- ✅ **설계 개선**: 테스트하기 쉬운 코드는 좋은 설계
- ✅ **자신감**: 배포에 대한 두려움 감소

### 1.2 좋은 테스트의 특징 (F.I.R.S.T 원칙)

```
F - Fast      : 빠르게 실행됨 (수초 내)
I - Independent : 테스트 간 독립적 (순서 무관)
R - Repeatable : 반복 가능 (언제나 같은 결과)
S - Self-validating : 스스로 검증 (수동 확인 불필요)
T - Timely    : 적시에 작성 (코드 작성과 함께)
```

---

## 2. 테스트의 종류

### 2.1 테스트 피라미드

```
        /\
       /E2E\        적음, 느림, 비용 높음
      /------\
     /통합테스트\     중간
    /----------\
   /  단위테스트  \   많음, 빠름, 비용 낮음
  /--------------\
```

### 2.2 단위 테스트 (Unit Test)

**특징**:
- 하나의 클래스/메서드만 테스트
- 의존성은 Mock으로 대체
- 매우 빠름 (밀리초 단위)
- 이 프로젝트에서 작성한 테스트가 모두 단위 테스트

**예제**:
```java
@Test
void createRoutine_Success() {
    // 단위: RoutineService.createRoutine() 메서드만 테스트
    // 의존성: UserRepository, RoutineRepository는 Mock
}
```

### 2.3 통합 테스트 (Integration Test)

**특징**:
- 여러 컴포넌트가 함께 동작하는지 테스트
- 실제 DB, Redis 등 사용
- 느림 (초 단위)

**예제**:
```java
@SpringBootTest
@AutoConfigureTestDatabase
class RoutineServiceIntegrationTest {
    // 실제 DB 사용, Spring Context 로드
}
```

### 2.4 E2E 테스트 (End-to-End Test)

**특징**:
- 전체 시스템을 사용자 관점에서 테스트
- API 호출부터 DB까지 전체 플로우
- 매우 느림 (분 단위)

---

## 3. JUnit 5 기초

### 3.1 기본 어노테이션

```java
class ExampleTest {

    // 각 테스트 실행 전 매번 실행
    @BeforeEach
    void setUp() {
        // 테스트 데이터 초기화
    }

    // 각 테스트 실행 후 매번 실행
    @AfterEach
    void tearDown() {
        // 정리 작업
    }

    // 클래스당 한 번만 실행 (static 메서드)
    @BeforeAll
    static void setUpAll() {
        // 공통 설정
    }

    @AfterAll
    static void tearDownAll() {
        // 마무리 작업
    }

    // 실제 테스트 메서드
    @Test
    void myTest() {
        // 테스트 로직
    }

    // 테스트 이름 지정 (한글 가능)
    @DisplayName("사용자 생성 성공 테스트")
    @Test
    void createUser_Success() {
        // ...
    }
}
```

### 3.2 Nested 클래스로 테스트 구조화

```java
@DisplayName("UserService 테스트")
class UserServiceTest {

    @Nested
    @DisplayName("register 테스트")
    class RegisterTest {

        @Test
        @DisplayName("정상적인 회원가입")
        void register_Success() {
            // ...
        }

        @Test
        @DisplayName("이메일 중복 시 예외 발생")
        void register_DuplicateEmail_ThrowsException() {
            // ...
        }
    }

    @Nested
    @DisplayName("login 테스트")
    class LoginTest {
        // ...
    }
}
```

**장점**:
- 테스트가 메서드별로 그룹화되어 가독성 향상
- 각 Nested 클래스에서 공통 설정 가능
- 테스트 리포트에서 계층 구조로 표시

### 3.3 테스트 실행과 제외

```java
// 테스트 비활성화
@Disabled("아직 구현 안 됨")
@Test
void futureFeature() {
    // ...
}

// 조건부 실행
@EnabledOnOs(OS.LINUX)
@Test
void onlyOnLinux() {
    // ...
}

@EnabledIf("isDevEnvironment")
@Test
void onlyInDev() {
    // ...
}
```

---

## 4. Mockito로 의존성 분리하기

### 4.1 Mockito란?

**Mock 객체**: 실제 객체를 흉내내는 가짜 객체
- 실제 DB, 외부 API 호출 없이 테스트 가능
- 테스트 속도 향상
- 테스트 격리 (독립성 보장)

### 4.2 기본 설정

```java
@ExtendWith(MockitoExtension.class)  // JUnit 5와 Mockito 연동
class ServiceTest {

    @Mock
    private UserRepository userRepository;  // Mock 객체 생성

    @InjectMocks
    private UserService userService;  // Mock을 주입받는 실제 객체

    @Test
    void test() {
        // userService는 실제 객체
        // userRepository는 가짜(Mock) 객체
    }
}
```

### 4.3 Mock 동작 정의 (Stubbing)

#### given() - 메서드 호출 시 반환값 설정

```java
// BDD 스타일 (권장)
given(userRepository.findById(1L))
    .willReturn(Optional.of(user));

// 전통적 스타일
when(userRepository.findById(1L))
    .thenReturn(Optional.of(user));
```

#### 다양한 Stubbing 패턴

```java
// 1. 특정 값 반환
given(repository.findById(1L))
    .willReturn(Optional.of(user));

// 2. 예외 발생
given(repository.findById(999L))
    .willThrow(new EntityNotFoundException("Not found"));

// 3. 여러 번 호출 시 다른 값 반환
given(repository.count())
    .willReturn(1L, 2L, 3L);  // 첫 호출: 1, 두 번째: 2, 세 번째: 3

// 4. 어떤 인자든 허용 (ArgumentMatchers)
given(repository.findById(anyLong()))
    .willReturn(Optional.of(user));

given(repository.findByEmail(any(String.class)))
    .willReturn(Optional.of(user));

// 5. 실제 메서드 호출
given(repository.save(any(User.class)))
    .willAnswer(invocation -> invocation.getArgument(0));
    // save() 호출 시 전달받은 인자를 그대로 반환

// 6. void 메서드
willDoNothing().given(repository).delete(any(User.class));

willThrow(new RuntimeException()).given(repository).delete(any(User.class));
```

### 4.4 ArgumentMatchers (인자 매칭)

```java
// 정확한 값 매칭
given(repository.findById(1L)).willReturn(Optional.of(user));

// 임의의 값 허용
given(repository.findById(anyLong())).willReturn(Optional.of(user));
given(repository.findByEmail(anyString())).willReturn(Optional.of(user));
given(repository.findAll(any(Pageable.class))).willReturn(page);

// null 허용
given(repository.findByName(isNull())).willReturn(emptyList());
given(repository.findByName(nullable(String.class))).willReturn(emptyList());

// 조건 매칭
given(repository.findById(longThat(id -> id > 0))).willReturn(Optional.of(user));

// eq() - 정확한 값 지정 (Matchers와 혼용 시 필요)
given(repository.findByIdAndEmail(eq(1L), anyString()))
    .willReturn(Optional.of(user));
```

**주의**: ArgumentMatchers 사용 시 모든 인자에 Matcher를 사용하거나, 모두 실제 값을 사용해야 함

```java
// ❌ 잘못된 예
given(repository.findByIdAndEmail(1L, anyString()))  // 컴파일 에러

// ✅ 올바른 예
given(repository.findByIdAndEmail(eq(1L), anyString()))
```

### 4.5 검증 (Verification)

```java
// 메서드가 호출되었는지 검증
verify(userRepository).save(any(User.class));

// 정확히 N번 호출되었는지
verify(userRepository, times(2)).save(any(User.class));

// 최소/최대 호출 횟수
verify(userRepository, atLeast(1)).save(any(User.class));
verify(userRepository, atMost(3)).save(any(User.class));

// 한 번도 호출되지 않았는지
verify(userRepository, never()).delete(any(User.class));

// 호출된 인자 검증
ArgumentCaptor<User> captor = ArgumentCaptor.forClass(User.class);
verify(userRepository).save(captor.capture());
User savedUser = captor.getValue();
assertThat(savedUser.getEmail()).isEqualTo("test@example.com");
```

### 4.6 실전 예제

```java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @Test
    void register_Success() {
        // Given - Mock 동작 정의
        given(userRepository.existsByEmail("test@example.com"))
            .willReturn(false);
        given(passwordEncoder.encode("password123"))
            .willReturn("hashedPassword");
        given(userRepository.save(any(User.class)))
            .willAnswer(invocation -> {
                User user = invocation.getArgument(0);
                // ID 설정 (실제 DB라면 자동 생성)
                setId(user, 1L);
                return user;
            });

        // When - 실제 메서드 호출
        RegisterResult result = userService.register(
            new RegisterCommand("test@example.com", "password123", "Test User")
        );

        // Then - 결과 검증
        assertThat(result.id()).isEqualTo(1L);
        assertThat(result.email()).isEqualTo("test@example.com");

        // Mock 호출 검증
        verify(userRepository).existsByEmail("test@example.com");
        verify(passwordEncoder).encode("password123");
        verify(userRepository).save(any(User.class));
    }
}
```

---

## 5. AssertJ로 검증하기

### 5.1 AssertJ란?

JUnit의 기본 assertion보다 읽기 쉽고 강력한 assertion 라이브러리

```java
// JUnit 기본 (비권장)
assertEquals(expected, actual);
assertTrue(condition);

// AssertJ (권장)
assertThat(actual).isEqualTo(expected);
assertThat(condition).isTrue();
```

### 5.2 기본 Assertion

```java
// 값 검증
assertThat(actual).isEqualTo(expected);
assertThat(actual).isNotEqualTo(other);
assertThat(actual).isSameAs(expected);  // 동일 객체 참조

// null 검증
assertThat(actual).isNull();
assertThat(actual).isNotNull();

// boolean 검증
assertThat(condition).isTrue();
assertThat(condition).isFalse();

// 숫자 검증
assertThat(number).isEqualTo(10);
assertThat(number).isGreaterThan(5);
assertThat(number).isLessThan(20);
assertThat(number).isBetween(1, 10);
assertThat(number).isPositive();
assertThat(number).isNegative();
assertThat(number).isZero();

// 문자열 검증
assertThat(str).isEqualTo("hello");
assertThat(str).contains("ell");
assertThat(str).startsWith("he");
assertThat(str).endsWith("lo");
assertThat(str).isEmpty();
assertThat(str).isNotEmpty();
assertThat(str).hasSize(5);
assertThat(str).matches("h.*o");  // 정규식
```

### 5.3 컬렉션 Assertion

```java
List<String> list = List.of("a", "b", "c");

// 크기 검증
assertThat(list).hasSize(3);
assertThat(list).isEmpty();
assertThat(list).isNotEmpty();

// 포함 여부
assertThat(list).contains("a", "b");
assertThat(list).containsOnly("a", "b", "c");
assertThat(list).containsExactly("a", "b", "c");  // 순서까지 일치
assertThat(list).containsExactlyInAnyOrder("c", "a", "b");
assertThat(list).doesNotContain("d");

// 첫/마지막 요소
assertThat(list).first().isEqualTo("a");
assertThat(list).last().isEqualTo("c");

// 특정 조건 필터링
assertThat(list)
    .filteredOn(s -> s.startsWith("a"))
    .hasSize(1);
```

### 5.4 객체 필드 검증

```java
User user = new User("test@example.com", "password", "Test User");

// 필드 검증
assertThat(user.getEmail()).isEqualTo("test@example.com");

// extracting - 여러 필드 한번에 검증
assertThat(user)
    .extracting("email", "name")
    .containsExactly("test@example.com", "Test User");

// 리스트 객체의 필드 검증
List<User> users = List.of(user1, user2, user3);
assertThat(users)
    .extracting(User::getEmail)
    .containsExactly("test1@example.com", "test2@example.com", "test3@example.com");
```

### 5.5 예외 검증

```java
// 예외 발생 검증
assertThatThrownBy(() -> userService.login("wrong@email.com", "password"))
    .isInstanceOf(IllegalArgumentException.class)
    .hasMessageContaining("이메일 또는 비밀번호가 올바르지 않습니다");

// 예외가 발생하지 않는지 검증
assertThatNoException().isThrownBy(() -> userService.getUser(1L));

// 예외 타입과 메시지 모두 검증
assertThatExceptionOfType(EntityNotFoundException.class)
    .isThrownBy(() -> routineService.getRoutine(999L))
    .withMessage("루틴을 찾을 수 없습니다: 999");
```

### 5.6 실전 예제

```java
@Test
void getCommunityRoutines_Success() {
    // Given
    Routine routine1 = createRoutine(1L, "루틴1", 5L);
    Routine routine2 = createRoutine(2L, "루틴2", 3L);
    Page<Routine> page = new PageImpl<>(List.of(routine1, routine2));

    given(routineRepository.findPublicRoutines(any(Pageable.class)))
        .willReturn(page);

    // When
    RoutineListResponse response = routineService.getCommunityRoutines(0, 10);

    // Then
    assertThat(response).isNotNull();
    assertThat(response.getRoutines()).hasSize(2);
    assertThat(response.getRoutines())
        .extracting("name", "totalLikes")
        .containsExactly(
            tuple("루틴1", 5L),
            tuple("루틴2", 3L)
        );
    assertThat(response.getTotalElements()).isEqualTo(2);
    assertThat(response.getCurrentPage()).isEqualTo(0);
}
```

---

## 6. Given-When-Then 패턴

### 6.1 패턴 구조

```java
@Test
void testName() {
    // Given (준비) - 테스트에 필요한 데이터/상태 준비
    User user = createUser();
    given(userRepository.findById(1L)).willReturn(Optional.of(user));

    // When (실행) - 테스트할 동작 수행
    UserResponse result = userService.getUser(1L);

    // Then (검증) - 결과 확인
    assertThat(result).isNotNull();
    assertThat(result.getName()).isEqualTo("Test User");
    verify(userRepository).findById(1L);
}
```

### 6.2 각 단계의 역할

#### Given (준비)
- 테스트 데이터 생성
- Mock 객체 동작 정의 (Stubbing)
- 테스트 전제 조건 설정

```java
// Given
User user = User.create("test@example.com", "password", "Test User");
Routine routine = createRoutine(user.getId());
given(userRepository.findById(1L)).willReturn(Optional.of(user));
given(routineRepository.save(any(Routine.class))).willReturn(routine);
```

#### When (실행)
- 테스트할 메서드 호출
- 보통 한 줄

```java
// When
CreateRoutineResponse response = routineService.createRoutine(1L, request);
```

#### Then (검증)
- 결과 값 검증 (AssertJ)
- Mock 호출 검증 (verify)
- 상태 변화 확인

```java
// Then
assertThat(response).isNotNull();
assertThat(response.getId()).isEqualTo(1L);
assertThat(response.getName()).isEqualTo("Test Routine");
verify(userRepository).findById(1L);
verify(routineRepository).save(any(Routine.class));
```

### 6.3 실전 예제

```java
@Nested
@DisplayName("createRoutine 테스트")
class CreateRoutineTest {

    @Test
    @DisplayName("정상적인 루틴 생성")
    void createRoutine_Success() {
        // Given - 사용자가 존재하고, 루틴 생성 요청이 있음
        User user = createUser(1L);
        CreateRoutineRequest request = new CreateRoutineRequest(
            "아침 운동",
            "상체 중심 루틴",
            Goal.MUSCLE_GAIN
        );
        Routine savedRoutine = createRoutine(1L, "아침 운동");

        given(userRepository.findById(1L))
            .willReturn(Optional.of(user));
        given(routineRepository.save(any(Routine.class)))
            .willReturn(savedRoutine);

        // When - 루틴 생성 실행
        CreateRoutineResponse response = routineService.createRoutine(1L, request);

        // Then - 루틴이 정상적으로 생성됨
        assertThat(response).isNotNull();
        assertThat(response.getId()).isEqualTo(1L);
        assertThat(response.getName()).isEqualTo("아침 운동");
        assertThat(response.getDescription()).isEqualTo("상체 중심 루틴");

        // Mock 호출 검증
        verify(userRepository).findById(1L);
        verify(routineRepository).save(any(Routine.class));
    }

    @Test
    @DisplayName("사용자를 찾을 수 없는 경우 예외 발생")
    void createRoutine_UserNotFound_ThrowsException() {
        // Given - 사용자가 존재하지 않음
        CreateRoutineRequest request = new CreateRoutineRequest(
            "아침 운동",
            "상체 중심 루틴",
            Goal.MUSCLE_GAIN
        );
        given(userRepository.findById(999L))
            .willReturn(Optional.empty());

        // When & Then - 예외 발생
        assertThatThrownBy(() -> routineService.createRoutine(999L, request))
            .isInstanceOf(EntityNotFoundException.class)
            .hasMessageContaining("사용자를 찾을 수 없습니다");

        verify(userRepository).findById(999L);
        verify(routineRepository, never()).save(any(Routine.class));
    }
}
```

---

## 7. 테스트 작성 전략

### 7.1 무엇을 테스트할 것인가?

#### 테스트해야 하는 것
✅ **비즈니스 로직**
```java
// 예: 루틴 복사 시 작성자만 가능
@Test
void copyRoutine_OnlyPublicRoutines() {
    // 비공개 루틴 복사 시도 시 예외 발생
}
```

✅ **엣지 케이스**
```java
// 빈 리스트, null, 경계값 등
@Test
void getRoutines_EmptyList() {
    given(repository.findAll()).willReturn(emptyList());
    // ...
}
```

✅ **예외 상황**
```java
@Test
void deleteRoutine_NotOwner_ThrowsException() {
    // 다른 사용자의 루틴 삭제 시도
}
```

#### 테스트하지 않아도 되는 것
❌ Getter/Setter
❌ 생성자 (단순 필드 할당)
❌ 프레임워크 코드 (Spring, JPA 등)

### 7.2 테스트 케이스 도출 방법

#### 1. 정상 경로 (Happy Path)
가장 기본적인 성공 시나리오

```java
@Test
void login_Success() {
    // 올바른 이메일/비밀번호로 로그인 성공
}
```

#### 2. 예외 경로 (Exception Path)
잘못된 입력, 권한 없음 등

```java
@Test
void login_WrongPassword_ThrowsException() {
    // 잘못된 비밀번호
}

@Test
void deleteRoutine_NotOwner_ThrowsException() {
    // 권한 없음
}
```

#### 3. 경계값 (Boundary)
최소값, 최대값, 0, null 등

```java
@Test
void getRoutines_FirstPage() {
    // 첫 페이지
}

@Test
void getRoutines_EmptyResult() {
    // 결과 없음
}
```

#### 4. 조합 (Combination)
여러 조건의 조합

```java
@Test
void getCommunityRoutines_WithGoalFilter() {
    // 목표별 필터링
}

@Test
void getCommunityRoutines_WithSorting() {
    // 정렬 옵션
}
```

### 7.3 테스트 명명 규칙

#### 메서드명 패턴

```java
// 패턴 1: 메서드명_상황_예상결과
@Test
void createRoutine_ValidInput_Success() { }

@Test
void createRoutine_UserNotFound_ThrowsException() { }

// 패턴 2: given절_when절_then절
@Test
void givenInvalidEmail_whenRegister_thenThrowsException() { }

// 패턴 3: 한글 DisplayName (권장)
@DisplayName("정상적인 루틴 생성")
@Test
void createRoutine_Success() { }

@DisplayName("사용자를 찾을 수 없는 경우 예외 발생")
@Test
void createRoutine_UserNotFound_ThrowsException() { }
```

### 7.4 테스트 데이터 생성 패턴

#### Builder 패턴 사용

```java
private User createUser(Long id) {
    User user = User.builder()
        .email("test@example.com")
        .password("hashedPassword")
        .name("Test User")
        .build();
    setId(user, id);
    return user;
}

private Routine createRoutine(Long userId) {
    return Routine.builder()
        .userId(userId)
        .name("Test Routine")
        .description("Test Description")
        .goal(Goal.MUSCLE_GAIN)
        .visibility(Visibility.PUBLIC)
        .build();
}
```

#### Object Mother 패턴

```java
class UserFixtures {
    public static User defaultUser() {
        return createUser(1L, "test@example.com", "Test User");
    }

    public static User adminUser() {
        return createUser(2L, "admin@example.com", "Admin");
    }

    private static User createUser(Long id, String email, String name) {
        User user = User.create(email, "password", name);
        setId(user, id);
        return user;
    }
}

// 사용
@Test
void test() {
    User user = UserFixtures.defaultUser();
    // ...
}
```

---

## 8. 실전 패턴과 테크닉

### 8.1 Reflection으로 private 필드 설정

JPA 엔티티의 ID는 보통 private이고 setter가 없음

```java
private void setId(Object entity, Long id) throws Exception {
    Field idField = entity.getClass().getDeclaredField("id");
    idField.setAccessible(true);
    idField.set(entity, id);
}

// 사용
User user = User.create("test@example.com", "password", "Test");
setId(user, 1L);  // ID 강제 설정
```

### 8.2 DTO 생성 (생성자가 private인 경우)

```java
private void setField(Object target, String fieldName, Object value) throws Exception {
    Field field = target.getClass().getDeclaredField(fieldName);
    field.setAccessible(true);
    field.set(target, value);
}

// 사용
StartWorkoutRequest request = new StartWorkoutRequest();
setField(request, "routineId", 1L);
setField(request, "dayOfWeek", DayOfWeek.MONDAY);
```

### 8.3 Mockito Strictness 설정

불필요한 stubbing 경고 방지

```java
@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)  // 추가
class ServiceTest {
    // ...
}
```

### 8.4 ArgumentCaptor로 인자 검증

```java
@Test
void createRoutine_SavesCorrectData() {
    // Given
    given(userRepository.findById(1L)).willReturn(Optional.of(user));
    given(routineRepository.save(any(Routine.class))).willReturn(routine);

    // When
    routineService.createRoutine(1L, request);

    // Then - save()에 전달된 Routine 객체 검증
    ArgumentCaptor<Routine> captor = ArgumentCaptor.forClass(Routine.class);
    verify(routineRepository).save(captor.capture());

    Routine savedRoutine = captor.getValue();
    assertThat(savedRoutine.getUserId()).isEqualTo(1L);
    assertThat(savedRoutine.getName()).isEqualTo("Test Routine");
}
```

### 8.5 여러 Mock 객체 동시에 설정

```java
@BeforeEach
void setUp() {
    // 공통 Mock 설정
    given(userRepository.findById(anyLong()))
        .willAnswer(invocation -> {
            Long id = invocation.getArgument(0);
            if (id == 1L) return Optional.of(user);
            return Optional.empty();
        });
}
```

### 8.6 willAnswer로 동적 반환

```java
// 전달받은 인자를 그대로 반환
given(repository.save(any(User.class)))
    .willAnswer(invocation -> invocation.getArgument(0));

// 인자에 따라 다른 값 반환
given(repository.findById(anyLong()))
    .willAnswer(invocation -> {
        Long id = invocation.getArgument(0);
        if (id == 1L) return Optional.of(user1);
        if (id == 2L) return Optional.of(user2);
        return Optional.empty();
    });
```

### 8.7 예외 테스트 패턴

```java
// 패턴 1: assertThatThrownBy (권장)
@Test
void deleteRoutine_NotOwner_ThrowsException() {
    given(routineRepository.findById(1L)).willReturn(Optional.of(routine));

    assertThatThrownBy(() -> routineService.deleteRoutine(2L, 1L))
        .isInstanceOf(ForbiddenException.class)
        .hasMessageContaining("권한이 없습니다");
}

// 패턴 2: try-catch (비권장)
@Test
void deleteRoutine_NotOwner_ThrowsException() {
    try {
        routineService.deleteRoutine(2L, 1L);
        fail("예외가 발생해야 함");
    } catch (ForbiddenException e) {
        assertThat(e.getMessage()).contains("권한이 없습니다");
    }
}
```

---

## 9. 자주 하는 실수와 해결법

### 9.1 실수 1: Given에서 너무 많은 설정

**❌ 나쁜 예**:
```java
@Test
void test() {
    // Given - 불필요한 설정까지 모두 포함
    User user = createUser();
    given(userRepository.findById(1L)).willReturn(Optional.of(user));
    given(userRepository.findByEmail(anyString())).willReturn(Optional.of(user));
    given(userRepository.existsByEmail(anyString())).willReturn(false);
    given(passwordEncoder.encode(anyString())).willReturn("hashed");
    // ... 10줄 이상

    // When
    userService.someMethod();

    // Then
    // ...
}
```

**✅ 좋은 예**:
```java
@Test
void test() {
    // Given - 이 테스트에 필요한 것만
    User user = createUser();
    given(userRepository.findById(1L)).willReturn(Optional.of(user));

    // When
    userService.someMethod();

    // Then
    // ...
}
```

### 9.2 실수 2: 한 테스트에서 여러 것을 검증

**❌ 나쁜 예**:
```java
@Test
void userService_AllFunctions() {
    // 회원가입 테스트
    userService.register(...);

    // 로그인 테스트
    userService.login(...);

    // 토큰 갱신 테스트
    userService.refresh(...);
}
```

**✅ 좋은 예**:
```java
@Test
void register_Success() {
    // 회원가입만 테스트
}

@Test
void login_Success() {
    // 로그인만 테스트
}

@Test
void refresh_Success() {
    // 토큰 갱신만 테스트
}
```

### 9.3 실수 3: Mock 호출 검증 누락

**❌ 나쁜 예**:
```java
@Test
void deleteRoutine_Success() {
    // Given
    given(routineRepository.findById(1L)).willReturn(Optional.of(routine));

    // When
    routineService.deleteRoutine(1L, 1L);

    // Then
    // 결과 검증만 하고 delete() 호출 검증 안 함
}
```

**✅ 좋은 예**:
```java
@Test
void deleteRoutine_Success() {
    // Given
    given(routineRepository.findById(1L)).willReturn(Optional.of(routine));

    // When
    routineService.deleteRoutine(1L, 1L);

    // Then
    verify(routineRepository).findById(1L);
    verify(routineRepository).delete(routine);  // 실제 삭제 확인
}
```

### 9.4 실수 4: ArgumentMatchers 혼용

**❌ 나쁜 예**:
```java
// 컴파일 에러!
given(repository.findByIdAndName(1L, anyString()))
    .willReturn(Optional.of(user));
```

**✅ 좋은 예**:
```java
// 모두 Matcher 사용
given(repository.findByIdAndName(eq(1L), anyString()))
    .willReturn(Optional.of(user));

// 또는 모두 실제 값
given(repository.findByIdAndName(1L, "Test"))
    .willReturn(Optional.of(user));
```

### 9.5 실수 5: 테스트 간 의존성

**❌ 나쁜 예**:
```java
class ServiceTest {
    private static User user;  // 테스트 간 공유

    @Test
    void test1() {
        user = createUser();
        user.setName("Test1");
    }

    @Test
    void test2() {
        // test1이 먼저 실행되어야 함 (순서 의존)
        assertThat(user.getName()).isEqualTo("Test1");
    }
}
```

**✅ 좋은 예**:
```java
class ServiceTest {
    private User user;

    @BeforeEach
    void setUp() {
        // 각 테스트마다 새로 생성
        user = createUser();
    }

    @Test
    void test1() {
        user.setName("Test1");
        assertThat(user.getName()).isEqualTo("Test1");
    }

    @Test
    void test2() {
        // 독립적으로 실행 가능
        assertThat(user.getName()).isEqualTo("Test User");
    }
}
```

### 9.6 실수 6: 의미 없는 검증

**❌ 나쁜 예**:
```java
@Test
void test() {
    // When
    User result = userService.getUser(1L);

    // Then
    assertThat(result).isNotNull();  // 이것만 검증
}
```

**✅ 좋은 예**:
```java
@Test
void test() {
    // When
    User result = userService.getUser(1L);

    // Then - 구체적으로 검증
    assertThat(result).isNotNull();
    assertThat(result.getId()).isEqualTo(1L);
    assertThat(result.getEmail()).isEqualTo("test@example.com");
    assertThat(result.getName()).isEqualTo("Test User");
    verify(userRepository).findById(1L);
}
```

---

## 10. 체크리스트

테스트 코드 작성 시 확인할 항목:

### 테스트 설계
- [ ] 각 테스트는 하나의 기능만 검증하는가?
- [ ] 테스트 이름이 명확한가?
- [ ] Given-When-Then 구조를 따르는가?

### Mock 설정
- [ ] 필요한 Mock만 생성했는가?
- [ ] Mock 동작(Stubbing)이 정확한가?
- [ ] ArgumentMatchers를 올바르게 사용했는가?

### 검증
- [ ] 결과값을 충분히 검증했는가?
- [ ] Mock 호출을 검증했는가?
- [ ] 예외 타입과 메시지를 검증했는가?

### 독립성
- [ ] 테스트 간 순서 의존성이 없는가?
- [ ] 외부 의존성(DB, API)이 없는가?
- [ ] 테스트 데이터를 매번 새로 생성하는가?

### 커버리지
- [ ] 정상 경로를 테스트했는가?
- [ ] 예외 상황을 테스트했는가?
- [ ] 엣지 케이스를 테스트했는가?

---

## 11. 추가 학습 자료

### 공식 문서
- JUnit 5: https://junit.org/junit5/docs/current/user-guide/
- Mockito: https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html
- AssertJ: https://assertj.github.io/doc/

### 책
- "테스트 주도 개발" - Kent Beck
- "단위 테스트" - Vladimir Khorikov
- "Effective Unit Testing" - Lasse Koskela

### 실습 방법
1. 기존 코드에 테스트 추가하기 (이 프로젝트처럼)
2. TDD로 새 기능 개발하기 (테스트 먼저 작성)
3. 코드 리뷰에서 테스트 커버리지 확인하기

---

## 12. 다음 단계

이 가이드를 숙지한 후:

1. **연습**: 간단한 서비스부터 테스트 작성
2. **리팩토링**: 기존 테스트를 더 읽기 쉽게 개선
3. **통합 테스트**: @SpringBootTest로 실제 DB 사용 테스트
4. **TDD 연습**: 테스트를 먼저 작성하고 구현하는 방식 시도

테스트 코드는 처음엔 어렵지만, 반복하다 보면 자연스럽게 작성할 수 있게 됩니다.
코드 작성 속도는 조금 느려질 수 있지만, 버그는 크게 줄어들고 리팩토링은 훨씬 쉬워집니다.
