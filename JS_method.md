### ✅ 📦 배열(Array) 메서드 정리표

| 메서드       | 설명                                         | 예시                               |
| ------------ | -------------------------------------------- | ---------------------------------- |
| `push()`     | 배열 끝에 요소 추가                          | `arr.push(3)` → `[1,2,3]`          |
| `pop()`      | 배열 끝 요소 제거 및 반환                    | `arr.pop()` → `3`                  |
| `unshift()`  | 배열 앞에 요소 추가                          | `arr.unshift(0)` → `[0,1,2]`       |
| `shift()`    | 배열 앞 요소 제거 및 반환                    | `arr.shift()` → `1`                |
| `slice()`    | 배열 자르기 (새 배열 반환, 원본 안 변함)     | `arr.slice(1, 3)` → `[2, 3]`       |
| `splice()`   | 배열 요소 삭제/추가 (원본 변경)              | `arr.splice(1, 2)` → 요소 2개 삭제 |
| `includes()` | 특정 값 포함 여부 확인 (`true`/`false`)      | `arr.includes(3)` → `true`         |
| `indexOf()`  | 특정 값의 인덱스 반환 (없으면 -1)            | `arr.indexOf("a")` → `0`           |
| `concat()`   | 배열 합치기 (새 배열 반환)                   | `arr1.concat(arr2)`                |
| `forEach()`  | 배열 순회 (반복 실행)                        | `arr.forEach(x => console.log(x))` |
| `map()`      | 배열 변형해서 새 배열 생성                   | `arr.map(x => x*2)`                |
| `filter()`   | 조건에 맞는 요소만 남긴 새 배열              | `arr.filter(x => x > 3)`           |
| `reduce()`   | 누적 계산                                    | `arr.reduce((a,b) => a+b, 0)`      |
| `find()`     | 조건에 맞는 첫 번째 요소 반환                | `arr.find(x => x > 5)`             |
| `sort()`     | 정렬 (문자 기준, 숫자 정렬은 `compare` 필요) | `arr.sort((a, b) => a - b)`        |
| `reverse()`  | 배열 역순 정렬                               | `arr.reverse()`                    |

---

### ✅ 🔤 문자열(String) 메서드 정리표

| 메서드          | 설명                                   | 예시                                   |
| --------------- | -------------------------------------- | -------------------------------------- |
| `length`        | 문자열 길이                            | `"hello".length` → `5`                 |
| `charAt()`      | 특정 위치 문자 반환                    | `"hi".charAt(1)` → `"i"`               |
| `includes()`    | 특정 문자 포함 여부                    | `"hi".includes("h")` → `true`          |
| `indexOf()`     | 특정 문자 위치 반환                    | `"abc".indexOf("b")` → `1`             |
| `slice()`       | 문자열 자르기                          | `"hello".slice(1, 4)` → `"ell"`        |
| `substring()`   | 시작과 끝 인덱스로 자르기              | `"hello".substring(0, 2)` → `"he"`     |
| `substr()`      | 시작 위치부터 길이만큼 자르기 (구버전) | `"hello".substr(1, 2)` → `"el"`        |
| `split()`       | 특정 문자 기준으로 나눠 배열 만들기    | `"a,b,c".split(",")` → `["a","b","c"]` |
| `trim()`        | 앞뒤 공백 제거                         | `"  hi  ".trim()` → `"hi"`             |
| `toUpperCase()` | 대문자 변환                            | `"hi".toUpperCase()` → `"HI"`          |
| `toLowerCase()` | 소문자 변환                            | `"HI".toLowerCase()` → `"hi"`          |
| `replace()`     | 특정 문자 치환                         | `"hi".replace("h", "y")` → `"yi"`      |

---

### ✅ 추가 팁

- 배열 자르기: `slice()` ← 원본 안 변함
- 배열 수정/삭제: `splice()` ← 원본 변함
- 조건으로 걸러내기: `filter()`
- 누적/합계: `reduce()`
- 문자열 나누기: `split()`
- 문자 자르기: `slice()` or `substring()`
