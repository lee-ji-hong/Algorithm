const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N, _], ...arr] = data.map((el) => el.split(" ").map(Number));
  
  // 그래프 배열
  const graph = Array.from({ length: N + 1 }, () => []);
  // 진입차수 배열
  const rank = Array.from({ length: N + 1 }, () => 0);

  arr.forEach(([a, b]) => {
    // 선행 노드 a의 그래프 안에 노드 b 추가
    graph[a].push(b);
    // 1. 진입 차수 계산
    // 선행 노드 a가 존재하는 노드 b의 진입차수 증가 
    rank[b]++;
  });
  
  // queue 구현
  const queue = [];
  let queueIdx = 0;

  for (let i = 1; i < N + 1; i++) {
    // 2. 진입차수가 0인 정점 선택
    if (!rank[i]) queue.push(i);
  }

  const result = [];
  while (queueIdx < queue.length) {
    const node = queue[queueIdx++];
    // 3,5. 선택한 정점 제거
    result.push(node);
    // 4. 진입차수 업데이트 ->선택한 정점과 연결된 정점들의 진입차수 감소
    graph[node].forEach((next) => {
      rank[next]--;
      // 5. 진입차수가 0인 정점 선택
      if (!rank[next]) queue.push(next);
    });
  }
  
  // 6. 결과반환
  console.log(...result);
}

solution(input);