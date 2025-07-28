function solution(rsp) {
    let winMap = {
        '2': '0', 
        '0': '5', 
        '5': '2' 
    };

    let result = '';
    for (let i = 0; i < rsp.length; i++) {
        result += winMap[rsp[i]];
    }

    return result;
}
