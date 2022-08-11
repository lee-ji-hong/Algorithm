function solution(str) {
  let answer = '';
  let mid = Math.floor(str.length/2);

    if(str.length%2 === 1) {
      answer = str.substr(mid, 1);
    }else {
      answer = str.substr(mid-1,2);
    }
    return answer;
  }

console.log(solution("good"));
