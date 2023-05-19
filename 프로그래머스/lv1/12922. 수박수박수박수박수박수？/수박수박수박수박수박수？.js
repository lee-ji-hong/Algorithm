function solution(n) {
    var answer = [];
    Array.from({length: n}, (v, i) => {(i+1) % 2 === 1 ? answer.push('수'):answer.push('박')});
    return answer.join('');
}