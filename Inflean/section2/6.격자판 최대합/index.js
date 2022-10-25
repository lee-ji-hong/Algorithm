function solution(arr){
  let answer=Number.MIN_SAFE_INTEGER; //정수 중에 가장 작은 수 
  let n = arr.length;
  let sum1=sum2=0;//for문 밖에서 선언을 해주어야 각각 행렬의 합과 대각선의 합에서 재선언을 해줄 필요가 없다.
  for(let i=0; i<n; i++){
   sum1=sum2=0; // sum1, sum2 는 계속해서 더해주라는 거니까 다시 새로운 for문을 돌릴때 초기화 시켜줘야함
   for(let j=0; j<n; j++){
    sum1 +=arr[i][j];// 행의 합
    sum2+=arr[j][i]; // 열의 합
   }
   answer = Math.max(answer, sum1, sum2);
   // console.log(answer + '===(' + answer + ',' +sum1 + ',' + sum2 + ')');

   // 대각선의 합
   sum1=sum2=0; 
   for( let i=0; i<n; i++){
    sum1 += arr[i][i];
    sum2 += arr[i][n-i-1];
   }
   answer = Math.max(answer, sum1, sum2);
   // console.log(answer + '===(' + answer + ',' +sum1 + ',' + sum2 + ')');
  }

  return answer;
}
let arr=[[10, 13, 10, 12, 15], 
       [12, 39, 30, 23, 11],
       [11, 25, 50, 53, 15],
       [19, 27, 29, 37, 27],
       [19, 13, 30, 13, 19]];
console.log(solution(arr));