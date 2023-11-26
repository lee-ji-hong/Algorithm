function solution(numbers) {
    return [...new Set(getPer(numbers))].filter(v => isPrime(v)).length;
}

const getPer = (str) => {
    const answer = [];
    const n = str.length;
    let ch = Array.from({ length: n }, () => 0);
    
    const dfs = (curStr) => {
        answer.push(+curStr);
        for (let i = 0; i < n; i++) {
            if (ch[i] === 0) {
                ch[i] = 1;
                dfs(curStr + str[i]);
                ch[i] = 0;
            }
        }
    }
    dfs('');
    answer.shift();
    return answer;
}

const isPrime = (n) => {
    if (n === 0 || n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
/*
소수 : 나누어지지 않는 어떤 수
모든 경우의 수 -> 순열? 

1. 1부터 numbers 의 개수 까지 반복
2. 예를들어 numbers="17"일때
answer.push
- 1개의 개수 : 1,7
-2개의 개수 : 17,71
3. answer 에서 중복제거, 소수아닌 수 제거
4. return answer.length
*/