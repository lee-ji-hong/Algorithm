function solution(food) {
    var answer = '';
    for(let i = 1; i < food.length; i++){
        const count = Math.floor(food[i]/2);
        answer += i.toString().repeat(count);
    }
    
    return answer + '0' + answer.split("").reverse().join("");
}