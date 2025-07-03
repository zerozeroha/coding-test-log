/**
 * 문제 설명
 * 정수 리스트 num_list와 정수 n이 주어질 때,
 * n번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 반환합니다.
 *
 * 제한사항
 * - 2 ≤ num_list.length ≤ 30
 * - 1 ≤ num_list의 원소 ≤ 9
 * - 1 ≤ n ≤ num_list.length
 *
 * 입출력 예
 * solution([2, 1, 6], 3) → [6]
 * solution([5, 2, 1, 7, 5], 2) → [2, 1, 7, 5]
 *
 * 헷갈릴 수 있는 포인트
 * - 문제에서 말하는 "n번째"는 사람 기준의 1-based 인덱스입니다.
 *   → 자바스크립트 배열은 0부터 시작하므로 `n - 1`로 변환해야 합니다.
 * - 배열 일부를 잘라낼 때는 slice(start) 메서드를 사용하며,
 *   start부터 끝까지의 모든 요소를 잘라서 반환합니다.
 */

function solution(num_list, n) {
  // 1-based 인덱스를 0-based로 변환 후, 해당 위치부터 끝까지 자르기
  return num_list.slice(n - 1);
}

// 예시 실행
console.log(solution([2, 1, 6], 3)); // [6]
console.log(solution([5, 2, 1, 7, 5], 2)); // [2, 1, 7, 5]
