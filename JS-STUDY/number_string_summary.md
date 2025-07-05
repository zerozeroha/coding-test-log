## JavaScript Number & String 핵심 정리

## Number 관련 함수 및 메서드 정리

| 함수/속성              | 설명                                 | 예시                              |
| ---------------------- | ------------------------------------ | --------------------------------- |
| `Number(str)`          | 문자열을 숫자로 변환                 | `Number("123")` → `123`           |
| `parseInt(str, radix)` | 문자열을 정수로 변환, 진법 지정 가능 | `parseInt("101", 2)` → `5`        |
| `parseFloat(str)`      | 문자열을 부동소수점으로 변환         | `parseFloat("3.14")` → `3.14`     |
| `isNaN(val)`           | NaN 여부 확인                        | `isNaN("abc")` → `true`           |
| `isFinite(val)`        | 유한한 수인지 확인                   | `isFinite(10)` → `true`           |
| `toFixed(digits)`      | 소수점 자리수 고정 (문자열 반환)     | `(3.14159).toFixed(2)` → `"3.14"` |
| `Math.pow(a, b)`       | a의 b제곱                            | `Math.pow(2, 3)` → `8`            |
| `**` (지수 연산자)     | 제곱 연산자                          | `2 ** 3` → `8`                    |

> **팁**: `Number()`는 빠르고 직관적이며, 무의미한 문자열은 `NaN`으로 반환합니다.

---

## String 관련 함수 및 메서드 정리

| 메서드              | 설명                      | 예시                                   |
| ------------------- | ------------------------- | -------------------------------------- |
| `String(num)`       | 숫자를 문자열로 변환      | `String(123)` → `"123"`                |
| `str.length`        | 문자열 길이               | `"hello".length` → `5`                 |
| `charAt(index)`     | 해당 인덱스의 문자 반환   | `"hi".charAt(1)` → `"i"`               |
| `includes(substr)`  | 문자열 포함 여부          | `"apple".includes("p")` → `true`       |
| `indexOf(substr)`   | 처음 나오는 위치 반환     | `"banana".indexOf("n")` → `2`          |
| `slice(start, end)` | 부분 문자열 반환          | `"hello".slice(1,4)` → `"ell"`         |
| `split(sep)`        | 구분자 기준으로 배열 반환 | `"1,2,3".split(",")` → `["1","2","3"]` |
| `toUpperCase()`     | 대문자로 변환             | `"abc".toUpperCase()` → `"ABC"`        |
| `toLowerCase()`     | 소문자로 변환             | `"ABC".toLowerCase()` → `"abc"`        |
| `replace(old, new)` | 특정 문자 치환            | `"hi".replace("h", "y")` → `"yi"`      |
| `repeat(n)`         | 문자열 반복               | `"ab".repeat(3)` → `"ababab"`          |

> **팁**: 문자열은 불변(immutable) → 항상 `return`하거나 새 변수에 저장해서 사용해야 함.

---

## 사용 시 주의사항 요약

- `Number()`, `String()`은 **형변환 함수**이며 객체 생성자도 있음 (`new Number()`는 거의 안 씀).
- `Math.pow()` 대신 `**` 사용을 추천 (더 간결함).
- 문자열 조작은 split → 배열로 변환 후 map, filter 등과 함께 쓰면 매우 강력.
