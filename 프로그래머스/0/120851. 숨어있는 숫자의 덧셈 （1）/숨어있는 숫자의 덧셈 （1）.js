function solution(my_string) {
    
    return my_string.split("")
        .filter(char => !isNaN(char))
        .reduce((acc,cur)=>Number(acc)+Number(cur),0)
    
}