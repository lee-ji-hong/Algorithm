/*
1. 이진수로 변환
2. 이진수의 1의개수 구함
3. 이진수의 1의 개수 비교
*/ 
function count(number){
    return number.toString(2).split('1').length - 1;
}
function solution(n) {
    let number = n+1;
    while(true){
       if(count(number) === count(n)){
           return number;
       }
       number++;
    }
}