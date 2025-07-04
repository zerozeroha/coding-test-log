# 자바스크립트 필수 메서드 정리표 (프로그래머스 실전 중심)

## 배열(Array) 메서드

| 메서드        | 설명 및 예시                           |
| ------------- | -------------------------------------- |
| `push(value)` | 배열의 **끝에 요소 추가**, 원본 변경됨 |

예:

````js
let arr = [1, 2];
arr.push(3); // → [1, 2, 3]
``` |
| `pop()`       | 배열의 **끝 요소 제거 및 반환**, 원본 변경됨
예:
```js
let arr = [1, 2, 3];
let x = arr.pop(); // x = 3, arr = [1, 2]
``` |
| `unshift(value)` | 배열 **앞에 요소 추가**, 원본 변경됨
예:
```js
let arr = [1, 2];
arr.unshift(0); // → [0, 1, 2]
``` |
| `shift()`     | 배열 **앞 요소 제거 및 반환**, 원본 변경됨
예:
```js
let arr = [1, 2];
let x = arr.shift(); // x = 1, arr = [2]
``` |
| `slice(start, end)` | 배열 일부 잘라서 새 배열 반환, 원본 유지
예:
```js
[10, 20, 30, 40].slice(1, 3); // → [20, 30]
``` |
| `splice(start, deleteCount, ...items)` | 배열에서 요소 삭제/삽입, 원본 변경
예:
```js
let arr = [1, 2, 3, 4];
arr.splice(1, 2); // → [2, 3], arr = [1, 4]
``` |
| `includes(value)` | 배열에 특정 값 포함 여부 확인
```js
[1, 2, 3].includes(2); // true
``` |
| `indexOf(value)` | 값의 인덱스 반환, 없으면 -1
```js
['a', 'b', 'c'].indexOf('b'); // 1
``` |
| `forEach(callback)` | 배열 요소를 반복 처리 (반환값 없음)
```js
[1, 2, 3].forEach(x => console.log(x));
``` |
| `map(callback)` | 요소를 변형한 새 배열 반환
```js
[1, 2, 3].map(x => x * 2); // → [2, 4, 6]
``` |
| `filter(callback)` | 조건을 만족하는 요소만 새 배열로
```js
[1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
``` |
| `reduce(callback, initial)` | 누적 결과 반환
```js
[1, 2, 3].reduce((a, b) => a + b, 0); // → 6
``` |
| `sort((a,b)=>a-b)` | 오름차순 정렬
```js
[3, 1, 2].sort((a, b) => a - b); // → [1, 2, 3]
``` |
| `reverse()` | 배열 순서 반전
```js
[1, 2, 3].reverse(); // → [3, 2, 1]
``` |
| `concat(arr2)` | 배열 합치기
```js
[1, 2].concat([3, 4]); // → [1, 2, 3, 4]
``` |
| `fill(value)` | 배열을 특정 값으로 채움
```js
Array(3).fill(0); // → [0, 0, 0]
``` |
| `some(callback)` | 하나라도 조건 만족하면 true
```js
[1, 2, 3].some(x => x > 2); // true
``` |
| `every(callback)` | 모두 조건 만족해야 true
```js
[2, 4, 6].every(x => x % 2 === 0); // true
``` |
| `flat()` | 중첩 배열을 평탄화
```js
[1, [2, 3]].flat(); // → [1, 2, 3]
``` |

---

##  문자열(String) 메서드

| 메서드 | 설명 및 예시 |
|--------|--------------|
| `length` | 문자열 길이
```js
"hello".length; // 5
``` |
| `charAt(index)` | 특정 위치 문자 반환
```js
"hi".charAt(1); // "i"
``` |
| `includes(sub)` | 문자열 포함 여부
```js
"apple".includes("p"); // true
``` |
| `indexOf(sub)` | 문자 위치 반환
```js
"abc".indexOf("b"); // 1
``` |
| `slice(start, end)` | 문자열 일부 추출
```js
"hello".slice(1, 4); // "ell"
``` |
| `substring(start, end)` | 시작~끝 인덱스로 자름
```js
"hello".substring(0, 2); // "he"
``` |
| `substr(start, length)` | 시작~길이 만큼 자름 (구버전)
```js
"hello".substr(1, 2); // "el"
``` |
| `split(sep)` | 구분자로 나누기 → 배열
```js
"a,b,c".split(","); // ["a", "b", "c"]
``` |
| `trim()` | 앞뒤 공백 제거
```js
"  hi  ".trim(); // "hi"
``` |
| `toUpperCase()` | 대문자 변환
```js
"hi".toUpperCase(); // "HI"
``` |
| `toLowerCase()` | 소문자 변환
```js
"HI".toLowerCase(); // "hi"
``` |
| `replace(old, new)` | 문자열 치환
```js
"hi".replace("h", "y"); // "yi"
``` |
| `repeat(n)` | 문자열 반복
```js
"ab".repeat(3); // "ababab"
``` |
| `startsWith(sub)` | 특정 문자로 시작 여부
```js
"hello".startsWith("he"); // true
``` |
| `endsWith(sub)` | 특정 문자로 끝나는지
```js
"hello".endsWith("o"); // true
``` |

---

## 🔢 Math 및 숫자 변환 메서드

| 메서드 | 설명 및 예시 |
|--------|--------------|
| `Math.min(...nums)` | 최소값 반환
```js
Math.min(5, 3, 9); // 3
``` |
| `Math.max(...nums)` | 최대값 반환
```js
Math.max(5, 3, 9); // 9
``` |
| `Math.abs(num)` | 절댓값 반환
```js
Math.abs(-7); // 7
``` |
| `Math.floor(num)` | 내림 처리
```js
Math.floor(3.9); // 3
``` |
| `Math.ceil(num)` | 올림 처리
```js
Math.ceil(3.1); // 4
``` |
| `Math.round(num)` | 반올림
```js
Math.round(3.5); // 4
``` |
| `Math.random()` | 0 이상 1 미만 난수
```js
Math.random(); // 예: 0.72341
``` |
| `Number(str)` | 문자열 → 숫자 변환
```js
Number("10"); // 10
``` |
| `String(num)` | 숫자 → 문자열 변환
```js
String(42); // "42"
``` |
| `parseInt(str)` | 정수 파싱
```js
parseInt("42px"); // 42
``` |
| `parseFloat(str)` | 실수 파싱
```js
parseFloat("3.14m"); // 3.14
``` |

---

## 팁 요약

- `map`, `filter`, `reduce` → 고차함수, 자주 등장
- `repeat`, `replace`, `split`, `slice` → 문자열 문제에서 필수
- `sort`, `reverse`, `splice` → 정렬/순서 조작에서 자주 사용
- `Math.min`, `Math.max` → 공통 숫자 비교, 카운팅 문제 핵심

---
````
