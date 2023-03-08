function solution(n) {
    let answer = 0;
    //  Array.from() 메서드는 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만든다. 
    let dy = Array.from({ length: n + 1 }, () => 0); //[0,0,0,0,0...]
    console.log(dy.length)
    dy[1] = 1;
    dy[2] = 2;
    for (let i = 3; i <= n; i++) {
        dy[i] = dy[i - 2] + dy[i - 1]; //피보나치 수열이니까
    }
    answer = dy[n];
    return answer;
}

const n = 7;
console.log(solution(n));