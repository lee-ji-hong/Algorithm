function solution(n) {
    const answer = String(n).split('')
    answer.sort(function(a,b){
        return b-a
    });
    return parseInt(answer.join(''));
}