/**
 * 문제 설명
 * 정수 리스트 num_list와 정수 n이 주어질 때,
 * num_list를 n번째 원소 이후와 n번째까지로 나눈 뒤
 * n번째 이후의 원소들을 앞에 붙인 새 리스트를 반환하세요.
 *
 * ✨ 제한사항
 * - 2 ≤ num_list.length ≤ 30
 * - 1 ≤ num_list 원소 ≤ 9
 * - 1 ≤ n ≤ num_list.length
 *
 * 🧪 입출력 예시
 * solution([2, 1, 6], 1) → [1, 6, 2]
 * solution([5, 2, 1, 7, 5], 3) → [7, 5, 5, 2, 1]
 */

/**
 * @param {number[]} num_list - 정수 배열
 * @param {number} n - 나눌 기준 인덱스
 * @returns {number[]} - 재조합된 배열
 */
function solution(num_list, n) {
  // n번째 이후의 원소 + n번째까지의 원소
  return num_list.slice(n).concat(num_list.slice(0, n));
}

// 예시 실행
console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]
