function solution(absolutes, signs) {
  var answer = 0;
  for( let i=0; i<absolutes.length; i++) {
      if(signs[i] == false){
          answer += -absolutes[i];
       }else {
           answer += absolutes[i];
       }
  }
  return answer;
}

absolutes = [4,7,12];
signs = [true,false,true];
console.log(solution(absolutes, signs));

absolutes2 = [1,2,3];
signs2 = [false,false,true];
console.log(solution(absolutes2, signs2));