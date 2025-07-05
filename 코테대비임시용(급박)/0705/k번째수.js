/**
 * 문제 설명
 * 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때,
 * k번째에 있는 수를 구하는 문제입니다.
 *
 * 예를 들어 array = [1, 5, 2, 6, 3, 7, 4]이고, command = [2, 5, 3]이라면:
 * - 2번째부터 5번째까지 자르면 [5, 2, 6, 3]
 * - 정렬하면 [2, 3, 5, 6]
 * - 3번째 값은 5 → 결과로 5를 리턴
 *
 * 제한사항
 * - array의 길이는 1 이상 100 이하
 * - array의 각 원소는 1 이상 100 이하
 * - commands는 길이 1 이상 50 이하의 2차원 배열
 * - 각 command는 [i, j, k] 형식 (길이 3)
 *
 * 입출력 예
 * array = [1, 5, 2, 6, 3, 7, 4]
 * commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
 * → return [5, 6, 3]
 */

function solution(array, commands) {
  return commands.map(([i, j, k]) => {
    const sliced = array.slice(i - 1, j); // i번째부터 j번째까지 슬라이스 (1-based → 0-based)
    const sorted = sliced.sort((a, b) => a - b); // 정렬 (오름차순)
    return sorted[k - 1]; // k번째 원소 추출 (0-based)
  });
}

/**
 * 💡 헷갈렸던 부분 정리
 *
 * 1. 왜 slice(i - 1, j)인가요?
 *    → JS에서 slice는 0-based이고, 끝 인덱스는 미포함이므로
 *      1-based인 문제 조건을 맞추기 위해 i-1부터 j까지 자릅니다.
 *
 * 2. sort((a, b) => a - b)는 뭐예요?
 *    → 숫자 정렬 시 기본 sort는 유니코드 순이라 결과가 이상해질 수 있음.
 *      숫자 오름차순 정렬을 위해 compare 함수 사용해야 함.
 *
 * 3. sorted[k - 1]의 의미는?
 *    → JS 배열은 0-based이므로, k번째 값은 인덱스 k-1에 위치합니다.
 */
