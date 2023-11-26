function solution(a, b) {
    var answer = 0;
    Array.from({length: a.length}, (v, i) => {answer+= a[i]*b[i];});
    return answer;
}