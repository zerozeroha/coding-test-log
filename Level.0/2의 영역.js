/**
 * 문제 설명
 * 정수 배열 arr가 주어집니다.
 * 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 반환하세요.
 * 단, 배열에 2가 하나도 없으면 [-1]을 반환합니다.
 *
 * 제한사항
 * - 1 ≤ arr.length ≤ 100,000
 * - 1 ≤ arr의 원소 ≤ 10
 *
 * 입출력 예시
 * solution([1, 2, 1, 4, 5, 2, 9]) → [2, 1, 4, 5, 2]
 * solution([1, 2, 1]) → [2]
 * solution([1, 1, 1]) → [-1]
 * solution([1, 2, 1, 2, 1, 10, 2, 1]) → [2, 1, 2, 1, 10, 2]
 */

/**
 * @param {number[]} arr - 정수 배열
 * @returns {number[]} - 2가 포함된 최소 부분 배열 또는 [-1]
 */
function solution(arr) {
  // 2가 없으면 [-1] 반환
  if (!arr.includes(2)) {
    return [-1];
  }

  // 첫 번째 2의 인덱스
  const start = arr.indexOf(2);

  // 마지막 2의 인덱스
  const end = arr.lastIndexOf(2);

  // 해당 구간만 잘라서 반환
  return arr.slice(start, end + 1);
}

// 예시 실행
console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]
