function solution(str){
    let answer="";
    for(let x of str) {
        if(!isNaN(x)){ //숫자형이 아닌것의 부정이므로 숫자형일때 참
            answer +=x;
        }
    }
    return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));