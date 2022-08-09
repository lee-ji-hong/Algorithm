function solution(s) {
  let answer = 0; //변수를 초기화를 해주는 이유는 초기화를 하지 않으면 어떠한 미지의 수가 들어가 있기 때문에 반드시 초기화를 해준다.
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));

const fs = require('fs');
const stndin = (process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : ``) //기본 입력값 설정(백준 코딩테스트에서 비워놔도 무방하다.)
  .split('\n');

const input = (() => {
  //input()을 호출할 때마다 한줄씩 읽어온다.
  let line = 0;
  return () => stdin[line++];
})();
