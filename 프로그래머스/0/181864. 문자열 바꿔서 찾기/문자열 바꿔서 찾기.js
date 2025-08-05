function solution(myString, pat) {
    // 1. myString의 'A'와 'B'를 서로 바꾼 새로운 문자열을 만듭니다.
    const transformedString = [...myString].map(char => char === 'A' ? 'B' : 'A').join('');
    
    // 2. 바뀐 문자열에 pat이 포함되어 있는지 확인하여 결과를 반환합니다.
    return transformedString.includes(pat) ? 1 : 0;
}