function solution(my_string) {
 
    return my_string.split("")
        .map(char=>
             {if (char===char.toUpperCase()){
                return char.toLowerCase()
            }if (char===char.toLowerCase()){
                return char.toUpperCase()}
             }
            )
    .join("")
}