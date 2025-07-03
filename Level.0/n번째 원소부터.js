/**
 * 문제 설명
 * 정수 리스트 num_list와 정수 n이 주어질 때,
 * n번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 반환하세요.
 *
 * 제한사항
 * - 2 ≤ num_list.length ≤ 30
 * - 1 ≤ num_list의 원소 ≤ 9
 * - 1 ≤ n ≤ num_list.length
 *
 * 입출력 예시
 * solution([2, 1, 6], 3) → [6]
 * solution([5, 2, 1, 7, 5], 2) → [2, 1, 7, 5]
 */

/**
 * @param {number[]} num_list - 정수 배열
 * @param {number} n - 시작할 인덱스 (1-based)
 * @returns {number[]} - n번째부터 끝까지의 부분 배열
 */
function solution(num_list, n) {
  // 인덱스는 0부터 시작하므로 n-1 처리
  return num_list.slice(n - 1);
}

// 예시 실행
console.log(solution([2, 1, 6], 3)); // [6]
console.log(solution([5, 2, 1, 7, 5], 2)); // [2, 1, 7, 5]
