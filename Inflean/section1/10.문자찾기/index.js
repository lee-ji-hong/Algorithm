//문자를 입력했을 때 몇개가 존재하는지 알아내는 것
function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}
let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
