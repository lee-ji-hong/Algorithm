function solution(left, right) {
    var divisorSum = 0;
    for( i=left; i<=right; i++){
       Number.isInteger(Math.sqrt(i)) ? divisorSum-= i : divisorSum+=i
    }
    return divisorSum;
}

/*
1. 제곱근의 개수가 정수이면 약수의 개수는 짝수이다.

예를들어 16의 약수는 (1,2,4,8,16)이라고 했을 때 제곱근은 4이다. 
이는 (1,16),(2,8)(4,4) 처럼 같은 수를 곱했을 때 결과값이 나오기때문에 짝이 없는 수가 있단 거니까 
제곱근의 수가 정수인 수의 약수의 개수는 홀수가 될 수 밖에 없다. 
*/