function solution() {
  let answer = '';
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + ' ';
    console.log(answer);
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }

  return answer;
}

console.log(solution());

// 송아지의 위치가 수직선상의 좌표 점으로 주어지면
