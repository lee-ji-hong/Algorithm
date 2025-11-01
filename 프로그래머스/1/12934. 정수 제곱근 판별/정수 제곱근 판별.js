// function solution(n) {    
//     return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1,2) :-1
// }

// n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려고 한다. 
function solution(n){
    const sqrt = Math.sqrt(n);
    if(Number.isInteger(sqrt)){
        return (sqrt+1) ** 2;
    }else{
        return -1;
    }
}