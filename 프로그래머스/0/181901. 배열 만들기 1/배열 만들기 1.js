function solution(n, k) {
    let num = [];
    
    for(let i=1; i<=n; i++){
        if(i%k===0){
            num.push(i)
        }
    }
    
    return num.sort((a,b)=>a-b)
}