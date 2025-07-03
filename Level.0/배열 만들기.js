/**
 * 문제 설명
 * 정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다.
 * intervals는 항상 [[a1, b1], [a2, b2]] 형태이며, 각 구간은 닫힌 구간입니다.
 * 닫힌 구간이란 양 끝값과 그 사이 값을 모두 포함하는 구간을 의미합니다.
 *
 * 배열 arr에서 첫 번째 구간과 두 번째 구간에 해당하는 부분 배열을 잘라
 * 두 배열을 앞뒤로 붙인 새로운 배열을 반환하세요.
 *
 * 제한사항
 * - 1 ≤ arr.length ≤ 100,000
 * - 1 ≤ arr의 원소 < 100
 * - 1 ≤ a1 ≤ b1 < arr.length
 * - 1 ≤ a2 ≤ b2 < arr.length
 *
 * 입출력 예
 * arr = [1, 2, 3, 4, 5]
 * intervals = [[1, 3], [0, 4]]
 * 결과 → [2, 3, 4, 1, 2, 3, 4, 5]
 *
 * 구간 설명
 * - intervals[0] = [1, 3] → arr[1] ~ arr[3] → [2, 3, 4]
 * - intervals[1] = [0, 4] → arr[0] ~ arr[4] → [1, 2, 3, 4, 5]
 *
 * 헷갈렸던 포인트 정리
 * - 자바스크립트의 slice(start, end)는 "start 이상 end 미만" 구간만 잘라냅니다.
 * - 문제의 구간은 닫힌 구간이므로, end 값을 포함하려면 end + 1을 해줘야 합니다.
 * - 예: [1, 3] 구간을 자르려면 slice(1, 4)로 해야 [1], [2], [3] 즉 arr[1]~arr[3]이 포함됩니다.
 */

function solution(arr, intervals) {
  const [a1, b1] = intervals[0];
  const [a2, b2] = intervals[1];

  // 첫 번째 구간과 두 번째 구간 자른 후 concat으로 이어붙이기
  return arr.slice(a1, b1 + 1).concat(arr.slice(a2, b2 + 1));
}
