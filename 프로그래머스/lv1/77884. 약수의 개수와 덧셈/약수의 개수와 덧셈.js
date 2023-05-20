function countDivisor(num){
    let count = 0;
    for(let i=1; i<=num; i++){
        if(num%i ===0) count ++;
    }
    return count;
}

function solution(left, right) {
    var divisorSum = 0;
    for( i=left; i<=right; i++){
        countDivisor(i) % 2 === 0 ? divisorSum += i : divisorSum -= i;
    }
    return divisorSum;
}