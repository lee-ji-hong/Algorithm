function solution(n) {
  let answer;
  function DFS(v) {
    if(v > 7){ //종착지점
      return;
    }else{
      console.log(v);
      DFS(v*2);
      DFS(v*2+1);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));