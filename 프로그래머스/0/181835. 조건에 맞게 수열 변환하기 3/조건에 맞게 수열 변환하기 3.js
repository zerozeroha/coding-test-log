function solution(arr, k) {
    
    if (k%2===1){
        return arr.map(item => item*k)
    }else{
        return arr.map(item => item+k)
    }
}