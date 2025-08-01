function solution(my_string, index_list) {
   let result = []
    for(let i=0; i<index_list.length; i++){
         result.push(my_string.slice(index_list[i],index_list[i]+1))
    }return result.join("")
}