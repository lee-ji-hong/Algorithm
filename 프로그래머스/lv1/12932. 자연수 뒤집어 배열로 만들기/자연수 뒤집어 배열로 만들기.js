function solution(n) {
    var answer = [];
    n.toString().split('').map((item) => answer.push(parseInt(item)))
    return answer.reverse();
}