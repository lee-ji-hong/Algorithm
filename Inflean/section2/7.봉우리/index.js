function solution(arr){  
    let answer =0;
    let n = arr.length;
    // 각 행렬의 인덱스마다 상하좌우를 비교해준다.
    let dx = [-1, 0, 1, 0]; 
    let dy = [0, 1, 0, -1];
    for(let i=0; i<n; i++){
       for(let j=0;j<n; j++){
           let flag = 1; // 봉우리 
           for(let k=0; k<4; k++){ //각 행렬에서 상하좌우 비교하는 for문
               let nx=i+dx[k];
               let ny=j+dy[k];
               // arr[nx][ny] = 비교하는 행렬의 상하좌우의 value값
               if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
                   flag = 0;
                   break;
               }
           }
           if(flag) answer ++;
       }
    }
       
     return answer;
   }
   
   let arr=[[5, 3, 7, 2, 3], 
          [3, 7, 1, 6, 1],
          [7, 2, 5, 3, 4],
          [4, 3, 6, 4, 1],
          [8, 7, 3, 5, 2]];
   console.log(solution(arr));