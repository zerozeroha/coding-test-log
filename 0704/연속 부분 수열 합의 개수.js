/**
 * 문제 설명
 * 자연수로 이루어진 원형 수열이 주어졌을 때,
 * 해당 수열의 '연속 부분 수열의 합'으로 만들 수 있는 모든 경우의 수를 구하는 문제입니다.
 * 단, 원형 수열이므로 끝과 처음이 연결되어야 하며, 중복된 합은 하나로 간주합니다.
 *
 * 제한사항
 * - 3 ≤ elements.length ≤ 1,000
 * - 1 ≤ elements[i] ≤ 1,000
 *
 * 입출력 예
 * solution([7, 9, 1, 1, 4]) → 18
 * → 중복 제거된 합의 개수: [1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22]
 */

function solution(elements) {
  // 원형 수열을 처리하기 위해 수열을 두 번 이어붙인다 (시작 → 끝 → 다시 시작)
  const circular = elements.concat(elements);

  // 부분 수열의 합을 저장할 Set (중복 제거 용도)
  const set = new Set();

  // 부분 수열의 길이를 1부터 elements.length까지 모두 탐색
  for (let length = 1; length <= elements.length; length++) {
    // 각 길이마다, 시작 인덱스를 순차적으로 이동하며 모든 부분 수열 탐색
    for (let start = 0; start < elements.length; start++) {
      // 길이 length인 부분 수열 자르기 (원형 수열 처리 위해 circular 사용)
      const subArray = circular.slice(start, start + length);

      // 부분 수열의 합 구하기
      const sum = subArray.reduce((acc, cur) => acc + cur, 0);

      // Set에 추가 (중복 제거됨)
      set.add(sum);
    }
  }

  // 가능한 합의 가짓수 반환
  return set.size;
}

/**
 *  헷갈렸던 부분 정리
 *
 * 1. 왜 elements를 concat해서 circular로 만들지?
 *    → 원형 수열은 끝과 처음이 이어지므로, [7,9,1,1,4] → [7,9,1,1,4,7,9,1,1,4]처럼 두 번 붙이면
 *      길이 5 이하의 모든 연속 부분 수열을 시작 위치 제한 없이 slice로 구할 수 있음.
 *
 * 2. Set은 왜 쓰는 거야?
 *    → 합이 중복될 수 있으므로, 중복 제거를 위해 Set 사용.
 *      예: [1,2,3]에서 1+2와 3이 같다면 Set은 하나로 저장함.
 *
 * 3. set.size() 아닌 set.size?
 *    → Set의 크기는 메서드가 아니라 속성이기 때문에 소괄호를 붙이면 에러.
 *    속성 :	.size	Set 안의 요소 개수 반환 (함수가 아님!)	set.size → 2
 *
 */
