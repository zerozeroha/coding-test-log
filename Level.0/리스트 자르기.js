/**
 * 문제 설명
 * 정수 n, 정수 3개가 담긴 리스트 slicer, 정수 여러 개가 담긴 리스트 num_list가 주어집니다.
 * slicer에 담긴 정수를 차례대로 a, b, c라고 할 때, n에 따라 다음과 같이 num_list를 슬라이싱합니다.
 *
 * n === 1 : num_list의 0번 인덱스부터 b번 인덱스까지
 * n === 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
 * n === 3 : num_list의 a번 인덱스부터 b번 인덱스까지
 * n === 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
 *
 * 제한사항
 * - n은 1, 2, 3, 4 중 하나
 * - slicer의 길이는 항상 3이며, [a, b, c] 형태
 * - 0 ≤ a ≤ b ≤ num_list.length - 1
 * - 1 ≤ c ≤ 3
 * - 5 ≤ num_list.length ≤ 30
 * - 0 ≤ num_list의 원소 ≤ 100
 *
 * 입출력 예
 * solution(3, [1, 5, 2], [1,2,3,4,5,6,7,8,9]) → [2, 3, 4, 5, 6]
 * solution(4, [1, 5, 2], [1,2,3,4,5,6,7,8,9]) → [2, 4, 6]
 *
 * 주의할 점
 * - slice는 [start, end) 범위로 동작하므로, 닫힌 구간 [a, b]를 자르려면 slice(a, b + 1)
 * - n === 4일 경우, filter를 이용하여 간격 c마다 추출
 */

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  if (n === 1) {
    return num_list.slice(0, b + 1);
  } else if (n === 2) {
    return num_list.slice(a);
  } else if (n === 3) {
    return num_list.slice(a, b + 1);
  } else if (n === 4) {
    return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
  }
}
