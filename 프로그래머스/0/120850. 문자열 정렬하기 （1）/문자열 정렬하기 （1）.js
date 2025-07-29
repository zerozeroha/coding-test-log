function solution(my_string) {

    return [...my_string]
        .filter(char => char>=0 && char<=9)
    .map(Number)
    .sort((a,b)=>a-b)
    
}