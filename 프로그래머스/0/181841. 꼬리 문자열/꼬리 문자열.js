function solution(str_list, ex) {
    let filteredStr  = str_list.filter((item)=>!item.includes(ex))
    return filteredStr.join("")
}