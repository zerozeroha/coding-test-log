## JavaScript 필수 객체 정리 - Set / Map

## Set

`Set` 객체는 중복되지 않는 유일한 값을 저장하는 자료구조입니다.

### 주요 특징

- 중복된 값을 자동으로 제거
- 순서가 있는 반복 가능 객체 (iterable)
- 요소 추가, 삭제, 존재 확인이 쉬움

### 주요 메서드 & 속성

| 속성/메서드         | 설명                     | 예시                                  |
| ------------------- | ------------------------ | ------------------------------------- |
| `new Set(iterable)` | Set 생성                 | `new Set([1, 2, 2, 3])` → `{1, 2, 3}` |
| `add(value)`        | 값 추가                  | `set.add(4)`                          |
| `has(value)`        | 값 존재 여부 확인        | `set.has(2)` → `true`                 |
| `delete(value)`     | 특정 값 제거             | `set.delete(1)`                       |
| `clear()`           | 모든 요소 제거           | `set.clear()`                         |
| `size`              | 요소 개수 (메서드 아님!) | `set.size` → `3`                      |
| `forEach(callback)` | 모든 요소 순회           | `set.forEach(v => console.log(v))`    |

---

## Map

`Map` 객체는 키-값 쌍을 저장하는 자료구조입니다. 객체와 달리 모든 자료형을 키로 사용할 수 있습니다.

### 주요 특징

- 객체보다 더 정밀하게 키를 다룰 수 있음
- 키의 삽입 순서를 유지함

### 주요 메서드 & 속성

| 속성/메서드         | 설명                                   | 예시                                   |
| ------------------- | -------------------------------------- | -------------------------------------- |
| `new Map()`         | Map 생성                               | `new Map()`                            |
| `set(key, value)`   | 키-값 쌍 추가                          | `map.set('a', 1)`                      |
| `get(key)`          | 키에 해당하는 값 반환                  | `map.get('a')` → `1`                   |
| `has(key)`          | 키 존재 여부 확인                      | `map.has('a')` → `true`                |
| `delete(key)`       | 특정 키 제거                           | `map.delete('a')`                      |
| `clear()`           | 모든 키-값 제거                        | `map.clear()`                          |
| `size`              | 요소 개수                              | `map.size` → `2`                       |
| `forEach(callback)` | 모든 키-값 쌍 순회                     | `map.forEach((v,k)=>console.log(k,v))` |
| `keys()`            | 모든 키 반환 (이터레이터)              | `for (let k of map.keys())`            |
| `values()`          | 모든 값 반환 (이터레이터)              | `for (let v of map.values())`          |
| `entries()`         | 모든 [key, value] 쌍 반환 (이터레이터) | `for (let [k,v] of map.entries())`     |

---

## 팁 요약

- `Set`은 배열의 중복 제거, 포함 여부 체크에 유용
- `Map`은 객체보다 키 관리가 정교한 구조 → 순서 유지, 어떤 타입이든 키로 사용 가능
- 둘 다 `.size`는 **속성**이므로 `()` 없이 사용해야 함
