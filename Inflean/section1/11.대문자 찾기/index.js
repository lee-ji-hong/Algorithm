function solution(s) {
  let answer = 0; //변수를 초기화를 해주는 이유는 초기화를 하지 않으면 어떠한 미지의 수가 들어가 있기 때문에 반드시 초기화를 해준다.
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
