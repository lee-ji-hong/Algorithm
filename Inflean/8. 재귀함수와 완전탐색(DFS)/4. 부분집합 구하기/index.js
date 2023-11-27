function solution(n) {
  let answer = [];
  let ch = Array.from({length:n+1},()=>0);
  function DFS(v) {
   if(v === n+1){
    let tmp = "";
    for(let i = 1; i<n+1; i++){
      if(ch[i]===1)tmp+=(i+ " ");
    }
    if(tmp.length > 0) answer.push(tmp.trim());
   }else{
    ch[v] = 1;
    DFS(v+1);
    ch[v] = 0;
    DFS(v+1);
   }
  }
  DFS(1);
  return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));