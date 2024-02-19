function solution(){
let answer = ""
let queue = [];
queue.push(1);

while(queue.length){ // 큐(queue)에 아이템이 남아있는 동안 계속 동작
  let v = queue.shift();
  answer+=v+" "

  for(let nv of[v*2,v*2+1]){
    console.log(nv)
    if(nv>7) continue;
    queue.push(nv);
  }
}
  return answer;
}

console.log(solution())