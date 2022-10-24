function solution(arr) {
  let answer = [];
  answer.push(arr[0]); //첫번째 수는 무조건 출력하라는 조건을 충족시키기 위해
  for( let i = 1; i < arr.length; i++ ){
    if(arr[i]>arr[i-1]){
      answer.push(arr[i])
    }
  } 
  return answer;
}

let arr = [7,3,9,5,6,12];
console.log(solution(arr));