function solution(want, number, discount) {
    var answer = 0;
    
    
    for(let i = 0; i<discount.length; i++){
        let visited = [];
        const array = discount.slice(i,10+i);
            for(let j = 0; j< want.length; j++){
                let length = array.filter((el) => el === want[j]).length;
                if(length >= number[j]){
                    visited.push(true)
                }
            }
            if(visited.length === number.length){
                answer ++;
             }
    }
    
    return answer;
}