# ✅ 배열(Array) 메서드 정리표

| 메서드                                 | 설명                                   | 예시                                                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------------------------------- |
| `push(value)`                          | 배열 끝에 요소 추가, 원본 변경         | `let arr = [1,2]; arr.push(3);` → `[1,2,3]`                    |
| `pop()`                                | 배열 끝 요소 제거 및 반환, 원본 변경   | `let arr = [1,2,3]; let x = arr.pop();` → `x=3`, `arr=[1,2]`   |
| `unshift(value)`                       | 배열 앞에 요소 추가, 원본 변경         | `let arr = [1,2]; arr.unshift(0);` → `[0,1,2]`                 |
| `shift()`                              | 배열 앞 요소 제거 및 반환, 원본 변경   | `let arr = [1,2]; let x = arr.shift();` → `x=1`, `arr=[2]`     |
| `slice(start, end)`                    | 배열 일부 잘라 새 배열 반환, 원본 유지 | `[10,20,30,40].slice(1,3)` → `[20,30]`                         |
| `splice(start, deleteCount, ...items)` | 배열 요소 삭제/삽입, 원본 변경         | `let arr = [1,2,3,4]; arr.splice(1,2);` → `[2,3]`, `arr=[1,4]` |
| `includes(value)`                      | 특정 값 포함 여부 확인                 | `[1,2,3].includes(2)` → `true`                                 |
| `indexOf(value)`                       | 특정 값의 인덱스 반환                  | `['a','b','c'].indexOf('b')` → `1`                             |
| `forEach(callback)`                    | 배열 요소 반복 처리, 반환 없음         | `[1,2,3].forEach(x => console.log(x))`                         |
| `map(callback)`                        | 배열 요소 변형, 새 배열 반환           | `[1,2,3].map(x => x*2)` → `[2,4,6]`                            |
| `filter(callback)`                     | 조건 만족 요소만 새 배열 반환          | `[1,2,3,4].filter(x => x%2===0)` → `[2,4]`                     |
| `reduce(callback, init)`               | 누적 계산 결과 반환                    | `[1,2,3].reduce((a,b)=>a+b,0)` → `6`                           |
| `sort((a,b)=>a-b)`                     | 배열 정렬, 원본 변경                   | `[3,1,2].sort((a,b)=>a-b)` → `[1,2,3]`                         |
| `reverse()`                            | 배열 역순, 원본 변경                   | `[1,2,3].reverse()` → `[3,2,1]`                                |
| `concat(arr2)`                         | 배열 합치기, 새 배열 반환              | `[1,2].concat([3,4])` → `[1,2,3,4]`                            |
| `fill(value)`                          | 배열 특정 값으로 채우기                | `Array(3).fill(0)` → `[0,0,0]`                                 |
| `some(callback)`                       | 하나라도 조건 만족하면 true            | `[1,2,3].some(x => x > 2)` → `true`                            |
| `every(callback)`                      | 모두 조건 만족해야 true                | `[2,4,6].every(x => x%2===0)` → `true`                         |
| `flat()`                               | 중첩 배열 평탄화                       | `[1,[2,3]].flat()` → `[1,2,3]`                                 |
