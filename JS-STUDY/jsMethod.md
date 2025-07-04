# ✅ 배열 메서드 정리표

| 메서드                                 | 설명                           | 원본 변경 여부 | 예시                                                           |
| -------------------------------------- | ------------------------------ | -------------- | -------------------------------------------------------------- |
| `push(value)`                          | 배열 끝에 요소 추가            | ✅ 변경됨      | `let arr = [1,2]; arr.push(3);` → `[1,2,3]`                    |
| `pop()`                                | 배열 끝 요소 제거 및 반환      | ✅ 변경됨      | `let arr = [1,2,3]; let x = arr.pop();` → `x=3`, `arr=[1,2]`   |
| `unshift(value)`                       | 배열 앞에 요소 추가            | ✅ 변경됨      | `let arr = [1,2]; arr.unshift(0);` → `[0,1,2]`                 |
| `shift()`                              | 배열 앞 요소 제거 및 반환      | ✅ 변경됨      | `let arr = [1,2]; let x = arr.shift();` → `x=1`, `arr=[2]`     |
| `slice(start, end)`                    | 배열 일부 잘라 새 배열 반환    | ❌ 불변        | `[10,20,30,40].slice(1,3)` → `[20,30]`                         |
| `splice(start, deleteCount, ...items)` | 배열 요소 삭제/삽입            | ✅ 변경됨      | `let arr = [1,2,3,4]; arr.splice(1,2);` → `[2,3]`, `arr=[1,4]` |
| `includes(value)`                      | 특정 값 포함 여부 확인         | ❌ 불변        | `[1,2,3].includes(2)` → `true`                                 |
| `indexOf(value)`                       | 특정 값의 인덱스 반환          | ❌ 불변        | `['a','b','c'].indexOf('b')` → `1`                             |
| `forEach(callback)`                    | 배열 요소 반복 처리, 반환 없음 | ❌ 불변        | `[1,2,3].forEach(x => console.log(x))`                         |
| `map(callback)`                        | 배열 요소 변형, 새 배열 반환   | ❌ 불변        | `[1,2,3].map(x => x*2)` → `[2,4,6]`                            |
| `filter(callback)`                     | 조건 만족 요소만 새 배열 반환  | ❌ 불변        | `[1,2,3,4].filter(x => x%2===0)` → `[2,4]`                     |
| `reduce(callback, init)`               | 누적 계산 결과 반환            | ❌ 불변        | `[1,2,3].reduce((a,b)=>a+b,0)` → `6`                           |
| `sort((a,b)=>a-b)`                     | 배열 정렬                      | ✅ 변경됨      | `[3,1,2].sort((a,b)=>a-b)` → `[1,2,3]`                         |
| `reverse()`                            | 배열 역순                      | ✅ 변경됨      | `[1,2,3].reverse()` → `[3,2,1]`                                |
| `concat(arr2)`                         | 배열 합치기                    | ❌ 불변        | `[1,2].concat([3,4])` → `[1,2,3,4]`                            |
| `fill(value)`                          | 배열 특정 값으로 채우기        | ✅ 변경됨      | `Array(3).fill(0)` → `[0,0,0]`                                 |
| `some(callback)`                       | 하나라도 조건 만족하면 true    | ❌ 불변        | `[1,2,3].some(x => x > 2)` → `true`                            |
| `every(callback)`                      | 모두 조건 만족해야 true        | ❌ 불변        | `[2,4,6].every(x => x%2===0)` → `true`                         |
| `flat()`                               | 중첩 배열 평탄화               | ❌ 불변        | `[1,[2,3]].flat()` → `[1,2,3]`                                 |

---

## 💡 사용 시 주의사항

- `✅ 원본 변경됨` 메서드: 사용 후 **배열 상태가 바뀌므로** 주의! 복사본(`slice`, `spread`)을 써서 다룰 수 있음
- `❌ 불변` 메서드: **결과를 변수에 저장하거나 return해야 함**
  예: `const newArr = arr.slice(1)` 또는 `return arr.map(...)`
- 실전 코딩테스트에서는 불변 메서드를 더 선호하는 경우가 많음 (예측 가능한 코드 작성)

---

# ✅ 문자열(String) 메서드 정리표

| 메서드                  | 설명                           | 원본 변경 여부 | 예시                                   |
| ----------------------- | ------------------------------ | -------------- | -------------------------------------- |
| `length`                | 문자열 길이 반환               | ❌ 불변        | `'hello'.length` → `5`                 |
| `charAt(index)`         | 지정한 인덱스의 문자 반환      | ❌ 불변        | `'hi'.charAt(1)` → `'i'`               |
| `includes(sub)`         | 문자열 포함 여부               | ❌ 불변        | `'apple'.includes('p')` → `true`       |
| `indexOf(sub)`          | 문자의 첫 위치 반환, 없으면 -1 | ❌ 불변        | `'abc'.indexOf('b')` → `1`             |
| `slice(start, end)`     | 일부 문자열 추출               | ❌ 불변        | `'hello'.slice(1, 4)` → `'ell'`        |
| `substring(start, end)` | 시작~끝 인덱스 문자열 반환     | ❌ 불변        | `'hello'.substring(0, 2)` → `'he'`     |
| `substr(start, length)` | 시작 위치부터 길이만큼 추출    | ❌ 불변        | `'hello'.substr(1, 2)` → `'el'`        |
| `split(sep)`            | 구분자 기준 배열로 분리        | ❌ 불변        | `'a,b,c'.split(',')` → `['a','b','c']` |
| `trim()`                | 앞뒤 공백 제거                 | ❌ 불변        | `'  hi  '.trim()` → `'hi'`             |
| `toUpperCase()`         | 대문자로 변환                  | ❌ 불변        | `'hi'.toUpperCase()` → `'HI'`          |
| `toLowerCase()`         | 소문자로 변환                  | ❌ 불변        | `'HI'.toLowerCase()` → `'hi'`          |
| `replace(old, new)`     | 문자열 치환                    | ❌ 불변        | `'hi'.replace('h', 'y')` → `'yi'`      |
| `repeat(n)`             | 문자열 n번 반복                | ❌ 불변        | `'ab'.repeat(3)` → `'ababab'`          |
| `startsWith(sub)`       | 특정 문자로 시작하는지 확인    | ❌ 불변        | `'hello'.startsWith('he')` → `true`    |
| `endsWith(sub)`         | 특정 문자로 끝나는지 확인      | ❌ 불변        | `'hello'.endsWith('o')` → `true`       |

---

## 💡 문자열 메서드 사용 팁

- 문자열 메서드는 대부분 **원본 변경이 없기 때문에**,
  `return` 하거나 **변수에 재할당**해서 사용해야 함

```js
return str.toUpperCase(); // 혹은
const trimmed = str.trim();
```
