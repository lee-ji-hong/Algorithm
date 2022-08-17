function solution(str) {
  let answer;
  answer = str.filter(function(v,i){
    return str.indexOf(v) === i;
  });
  return answer;
  }

let array = ['good','time','good','time','student'];
console.log(solution(array));