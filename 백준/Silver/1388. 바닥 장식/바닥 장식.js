const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = 0;
// 2차원 배열 생성 
const [N, M] = n.split(' ').map(Number);
const floor = arr.map(item => item.split(''));

// 방문 배열 초기화
const visited = Array.from({length: N}, () => Array(M).fill(false));

function DFS(x, y, char){
    visited[x][y]=true;
    
    // 현재 문자가 '-'일 경우
  if (char === '-') {
    // 오른쪽으로 계속 이동하며 탐색
    if (y + 1 < M && !visited[x][y + 1] && floor[x][y + 1] === '-') {
      DFS(x, y + 1, char);
    }
  }
  // 현재 문자가 '|'일 경우
  else if (char === '|') {
    // 아래쪽으로 계속 이동하며 탐색
    if (x + 1 < N && !visited[x + 1][y] && floor[x + 1][y] === '|') {
      DFS(x + 1, y, char);
    }
  }
}

// floor 방문 여부 탐색
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) {
      answer++;
      DFS(i, j, floor[i][j]);
    }
  }
}

console.log(answer);
