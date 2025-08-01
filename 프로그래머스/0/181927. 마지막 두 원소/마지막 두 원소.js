function solution(num_list) {
    // 배열에 값을 추가할 땐 문자열로 변하는 += 대신, 배열 전용 스킬인 .push()를 사용해야 함!!
    
    let last = num_list[num_list.length-1]
    let prev = num_list[num_list.length-2]
    
    if(last > prev){
         num_list.push(last - prev)
    }else {
        num_list.push(last*2)
    }return num_list
}