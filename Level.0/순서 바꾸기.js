/**
 * 문제 설명
 * 정수 리스트 num_list와 정수 n이 주어질 때,
 * num_list를 n번째 원소 이후와 n번째까지로 나눈 뒤
 * n번째 이후의 원소들을 앞에 붙인 새 리스트를 반환합니다.
 *
 * 제한사항
 * - 2 ≤ num_list.length ≤ 30
 * - 1 ≤ num_list의 원소 ≤ 9
 * - 1 ≤ n ≤ num_list.length
 *
 * 입출력 예시
 * solution([2, 1, 6], 1) → [1, 6, 2]
 * solution([5, 2, 1, 7, 5], 3) → [7, 5, 5, 2, 1]
 *
 * 헷갈릴 수 있는 포인트
 * - n은 "n번째 원소"이므로 사람 기준 1-based 인덱스처럼 보이지만,
 *   실제 자바스크립트 slice에서는 그대로 0-based 인덱스로 사용합니다.
 * - num_list.slice(n)은 n번 인덱스부터 끝까지
 * - num_list.slice(0, n)은 0부터 n-1까지 (즉, n번째까지 앞부분)
 * - 이 둘을 concat으로 연결하면 원하는 결과가 됩니다.
 */

function solution(num_list, n) {
  // n번째 이후의 원소 + n번째까지의 원소
  return num_list.slice(n).concat(num_list.slice(0, n));
}

// 예시 실행
console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]
