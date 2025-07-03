/**
 *  문제 설명
 * 정수 배열 arr와 query가 주어집니다.
 * query를 순회하면서 다음 작업을 반복합니다:
 *
 * - 짝수 인덱스(i): query[i]번째 인덱스를 포함하여 그 이후를 버림 (앞쪽만 남김)
 * - 홀수 인덱스(i): query[i]번째 인덱스를 포함하지 않고 그 앞을 버림 (뒤쪽만 남김)
 *
 * 모든 query를 순회한 후 남은 arr의 부분 배열을 반환하세요.
 *
 *  제한사항
 * - 5 ≤ arr.length ≤ 100,000
 * - 0 ≤ arr[i] ≤ 100
 * - 1 ≤ query.length < min(50, arr.length / 2)
 * - query[i]는 항상 현재 arr의 길이보다 작음
 *
 *  입출력 예시
 * solution([0, 1, 2, 3, 4, 5], [4, 1, 2]) → [1, 2, 3]
 *
 * query 처리 과정:
 * 1. [0,1,2,3,4,5] → slice(0, 4+1) → [0,1,2,3,4]
 * 2. [0,1,2,3,4] → slice(1) → [1,2,3,4]
 * 3. [1,2,3,4] → slice(0, 2+1) → [1,2,3]
 */

/**
 * @param {number[]} arr - 초기 정수 배열
 * @param {number[]} query - 자를 기준 인덱스 목록
 * @returns {number[]} - query에 따라 잘린 최종 배열
 */
function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      // 짝수 인덱스: query[i] 포함해서 앞부분 남김
      arr = arr.slice(0, query[i] + 1);
    } else {
      // 홀수 인덱스: query[i] 포함하지 않고 뒷부분 남김
      arr = arr.slice(query[i]);
    }
  }
  return arr;
}

// 예시 실행
console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // [1, 2, 3]
