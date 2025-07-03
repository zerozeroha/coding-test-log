// 홀수 vs 짝수

// 문제 설명
// 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 50
// -9 ≤ num_list의 원소 ≤ 9
// 입출력 예
// num_list result
// [4, 2, 6, 1, 7, 6] 17
// [-1, 2, 5, 6, 3] 8
// 입출력 예 설명
// 입출력 예 #1

// 홀수 번째 원소들의 합은 4 + 6 + 7 = 17, 짝수 번째 원소들의 합은 2 + 1 + 6 = 9 이므로 17을 return합니다.
// 입출력 예 #2

// 홀수 번째 원소들의 합은 -1 + 5 + 3 = 7, 짝수 번째 원소들의 합은 2 + 6 = 8 이므로 8을 return합니다


// 문제풀이

function solution(num_list) {
  var answer = 0;

  var 짝수 = 0;
  var 홀수 = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 == 0) {
      짝수 += num_list[i]
    } else {
      홀수 += num_list[i]
    }
  }
  return answer = Math.max(짝수, 홀수);
}




// 풀이
function solutionAlt(num_list) {
  // 최종 반환할 값을 저장할 변수
  var answer = 0;

  // 짝수 번째 원소들의 합을 저장할 변수
  var 짝수 = 0;

  // 홀수 번째 원소들의 합을 저장할 변수
  var 홀수 = 0;

  // 배열의 모든 요소를 순회
  for (let i = 0; i < num_list.length; i++) {
    // 인덱스 기준이므로 i는 0부터 시작
    // 문제에서는 "첫 번째 원소가 1번"이므로
    // 인덱스 i가 0, 2, 4,...일 때 → 1, 3, 5번째로 짝수 위치
    if (i % 2 == 0) {
      짝수 += num_list[i]; // 짝수 번째 위치의 값을 누적
    } else {
      홀수 += num_list[i]; // 홀수 번째 위치의 값을 누적
    }
  }

  // 홀수합과 짝수합 중 더 큰 값을 반환
  return answer = Math.max(짝수, 홀수);
}
