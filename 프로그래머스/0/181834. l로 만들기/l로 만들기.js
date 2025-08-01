function solution(myString) {
    // filter는 조건으로  맞는 것만 '골라내서 남기고', map은 함수로 요소를 '변신'시킨다.
    return myString.split("").map(char=>char>'l'?char:'l').join("")
}