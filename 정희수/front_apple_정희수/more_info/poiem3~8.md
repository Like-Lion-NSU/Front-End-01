# #3
 # 자바스크립트 개발 환경과 실행 방법
## 브라우저와 Node.js의 차이점
 * html,css,자바스크립트   
    - 웹 페이지를 화면에 렌더링 하는 것이 목적
    - DOM API 기본으로 제공
    - file 시스템 제공 x


 * node.js
    - 서버 개발 환경을 제공하는 것이 목적   
    - DOM API 제공 x
    - 파일을 생성하고 수정할 수 있는 File 시스템 기본 제공
    - Web API x -> ECMAScript와 Node.js고유의 API 지원   
    ***
## 웹 브라우저  
    자주 사용하는 개발자 도구 
- Elements (렌더링 뷰)
- console (에러 확인, 메소드 결과 확인)
- sources(코드 디버깅)
- Network
- application <br>
***
 ## Node.js와 npm소개
Node.js <br>
-  브라우저에서만 동작하던 자바스크립트를 다른 환경에서 동작시킬 수 있는 자바스크립트 실행 환경
- 프런트 엔드 모던 자바스크립트 개발에 필수적인 환경임 <br>

npm
- 자바스크립트 패키지 매니저
- 모듈 패키지화 저장소
- 패키지 설치 및 관리를 위한 CLI제공

***
## code Runner 확장 플러그인

-> 다양한 프로그래밍 언어를 VS code에서 실행 가능
### code Runner단축키 : control+opton+N

<br>

## Live Server 확장 플러그인

->소스 코드를 수정할 때마다 수정사항을 자동으로 반영
***

# #4 브라우저 동작 원리
body 요소의 가장 아래에 자바스크립트를 위치 시키는 것이 좋은 아이디어인 이유
- html 요소들이 렌드링에 지장 받지 않아 로딩 시간 단축
- DOM이 완성되지 않으면 에러 발생

# #5 자바 기본 문법
- 변수(value) : 값을 저장하고 참조하기 위해 사용.
>  위치(address)를 기억하는 장소
>  >변수 선언 : var x; / 
> > 정수값의 할당 : x = 6;

- 데이터 타입(Data Type) : 프로그래밍 언어에서 사용할 수 있는 값의 종류

- 변수(Variable) : 값이 저장된 메모리 공간의 주소를 가리키는 식별자

- 리터럴(literal) : 값을 구성하는 최소 단위

## 값
```java
 // 숫자 리터럴
10.50
1001

// 문자열 리터럴
'Hello'
"World"

// 불리언 리터럴
true
false

// null 리터럴
null

// undefined 리터럴
undefined

// 객체 리터럴
{ name: 'Lee', gender: 'male' }

// 배열 리터럴
[ 1, 2, 3 ]

// 정규표현식 리터럴
/ab+c/

// 함수 리터럴
function() {}
```

- 원시타입 (primitive data type)
   - number
   - string
   - boolean
   - null
   - undefined
   - symbol
- 객체 타입 (object data type)
   - object

## 연산자
```java
// 문자열 연결 연산자
var str = 'My name is ' + 'Lee'; // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
var foo = 3 > 5; // false

// 논리 연산자
var bar = (5 > 3) && (2 < 4);  // true

// 타입 연산자
var type = typeof 'Hi'; // "string"

// 인스턴스 생성 연산자
var today = new Date(); // Sat Dec 01 2018 00:57:19 GMT+0900 (한국 표준시)
```
## 주석
- //
- /* */

## 문
문은 리터럴, 연산자(Operator), 표현식(Expression), 키워드(Keyword) 등으로 구성되며 세미콜론( ; )으로 끝나야 한다. 
```java
var x = 5;
var y = 6;
var z = x + y;

console.log(z);
```
## 표현식
: 하나의 값으로 평가 된다.
```java
// 표현식
5             // 5
5 * 10        // 50
5 * 10 > 10   // true
(5 * 10 > 10) && (5 * 10 < 100)  // true
```
> 문과 표현식의 비교
```java
// 선언문(Declaration statement)
var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.
// 할당문(Assignment statement)
x = 100; // 이 자체가 표현식이지만 완전한 문이기도 하다.
```

## 함수
함수는 호출에 의해 실행되는데 여러번 호줄 가능
```java
// 함수의 정의(함수 선언문)
function square(number) {
  return number * number;
}

// 함수의 호출
square(2); // 4
```

## 객체
- 자바스크립트 객체는 키(이름)와 값으로 구성된 프로퍼티의 집합이다.
- 자바의 객체는 객체지향의 상속을 구현하기 위해 "프로토타입"이라 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다.

## 배열
1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용.
- 자바의 배열은 객체이며 유용한 내장 메소드를 포함하고 있다.

```java
var arr = [1, 2, 3, 4, 5];

console.log(arr[1]); // 2
```

# #6 데이터 타입과 변수

- 변수는 값의 위치(주소)를 기억하는 장소.

> C나 Java같은 C-family 언어는 정적 타입(Static/Strong Type) 언어로 변수 선언 시 변수에 저장할 값의 종류를 사전에 타입 지정(Type annotation)하여야 한다. 다음은 C에서 정수형 변수를 선언하는 예이다.

```java
// 1byte 정수형: -128 ~ 127
char c;

// 4byte 정수형: -2,124,483,648 ~ 2,124,483,647
int num;
```

## 원시 타입 (Primitive Data Type)
 > 원시 타입의 값은 변경 불가능한 값(immutable value)이며 pass-by-value(값에 의한 전달) 이다.

 - INfinity : 양의 무한대
 - -Infinity : 음의 무한대
 - NaN : 산술 연산 불가(not-a-number) 
 ```java
 var pInf = 10 / 0;  // 양의 무한대
console.log(pInf);  // Infinity

var nInf = 10 / -0; // 음의 무한대
console.log(nInf);  // -Infinity

var nan = 1 * 'string'; // 산술 연산 불가
console.log(nan);       // NaN
```

## string
> 문자열(String)타입은 텍스트 데이터를 나타내는데 사용.

```java
var str = "string"; // 큰 따옴표
str = 'string';     // 작은 따옴표
str = `string`;     // 백틱(ES6 템플릿 리터럴)

str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다.";
str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.';
```

## boolean
***
> 논리적 참, 거짓을 타나내는 ture와 false뿐임
>> 조건에 의해 프로그램의 흐름을 제어하는 조건문에 자주 사용

## null
***
자바는 대소문자를 구별하므로 null은 Null, NULL과 다름

## symbol
***
 > 심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용한다. 
 
 심볼은 Symbol 함수를 호출해 생성한다. 

 ## 객체 타입
 ***
 > 름과 값을 가지는 데이터를 의미하는 프로퍼티(property)와 동작을 의미하는 메소드(method)를 포함할 수 있는 독립적 주체

 ## 변수
 ***
 > 변수(Variable)는 프로그램에서 사용되는 데이터를 일정 기간 동안 기억하여 필요한 때에 다시 사용하기 위해 데이터에 고유의 이름인 식별자(identifier)를 명시한 것
 - var, let, const 키워드 사용
 - var 키워드는 중복 선언 가능

 ## 동적 타이핑
 ***
> 변수의 타입 지정(Type annotation)없이 값이 할당되는 과정에서 값의 타입에 의해 자동으로 타입이 결정(Type Inference)될 것변수의 타입 지정(Type annotation)없이 값이 할당되는 과정에서 값의 타입에 의해 자동으로 타입이 결정(Type Inference)될 것

## 변수 호이스팅
***
>호이스팅이란 var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성

선언 단계 > 초기화 단계 > 할당 단계 3단계에 걸쳐 생성 됨


# #7 연산자

## 표현식
   > 리터럴, 식별자, 연산자, 함수 호출 등의 조함을 말함.
   >> 하나의 값으로 평가될 수 있는 문임
   >>>표현식은 리터럴 표현식, 식별자 표현식, 연산자 표현식, 함수/메소드 호출 표현식 등으로 나누어 볼 수 있지만 결국 평가되어 하나의 값을 만든다는 점에서 모두 동일함

   ## 문과 표현식
   > 자바스크립트 엔진에게 내리는 명령

## 역할
표현식 : 값을 생성하는 것
문 : 표현식으로 생성한 값을 사용해 컴퓨터에게 명령을 내리는 것

## 연산자
>하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다

## 산술 연산자
>피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다

## 할당 연산자
> 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다. 할당 연산자는 좌항의 변수에 값을 할당하므로 부수 효과가 있다

## 논리 연산자
논리 연산자 | 의미 
---|---|
ㅣㅣ | 논리합
&& | 논리곱
! | 부정

## 그룹 연산자
```java
10 * 2 + 3   // 23
10 * (2 + 3) // 50
```
# #8 제어문
>주어진 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용

## 블록문
> 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수 선언문 등에서 사용
- 블록문은 문의 끝에 세미콜론(;)을 붙이지 않는다.

## if..else문
>  문과 else 문은 2번 이상 사용할 수 없지만 else if 문은 여러 번 사용가능
```java
var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if…else 문
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수'; // 0은 음수가 아니다
}
console.log(kind); // 양수

// if…else if 문
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind); // 양수
```

- 코드 블록 내의 문이 하나뿐이라면 중괄호 생략 가능
```java
var num = 2;
var kind;

if (num > 0)      kind = '양수';
else if (num < 0) kind = '음수';
else              kind = '영';

console.log(kind); // 양수
```

## switch문
> switch 문의 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 순서를 이동
```java
switch (표현식) {
  case 표현식1:
    switch 문의 표현식과 표현식1이 일치하면 실행될 문;
    break;
  case 표현식2:
    switch 문의 표현식과 표현식2가 일치하면 실행될 문;
    break;
  default:
    switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;
}
```
## 반복문
>주어진 조건식(conditional expression)의 평가 결과가 참인 경우 코드 블럭을 실행
- for, while, do...whild문 제공

## --- for문 ---
> 조건식이 거짓으로 판별될 때까지 코드 블록을 반복 실행

## while문
> 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행
>>만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환되어 논리적 참, 거짓을 구별
```java
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
} // 0 
```
### 무한루프 탈출
```java
var count = 0;

// 무한루프
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2
```

## continue 문
> 반복문(for, for…in, for…of, while, do…while)의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동
- 특정 문자의 개수를 카운트하는 예제
```java
var string = 'Hello World.';
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== 'l') continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메소드를 사용해도 같은 동작을 한다.
console.log(string.match(/l/g).length); // 3
```