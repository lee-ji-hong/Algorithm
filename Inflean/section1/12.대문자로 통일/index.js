function solution(s) {
  let answer = ''; // 초기화 하는 방법에 숫자를 세는 것은 0으로 지정하고 안에 텍스트가 들어가는 것은 빈 텍스트로 지정
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;

    //if(x===x.toLowerCase()) answer+=x.toUpperCase();
    //else answer+=x;
  }
  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
