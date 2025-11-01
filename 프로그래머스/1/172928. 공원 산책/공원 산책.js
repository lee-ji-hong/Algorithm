// 길을 o,장애물을 x
// 조건 1 : 방향 이동할때 공원을 벗어나는지
// 조건 2 : 이동중 장애물이 있는지
// 조건에 실패하면 해당 명령을 무시하고 다음 명령 수행
// 공원을 나타내는 배열 park, 로봇 강아지가 수행할 배열 routes
// 최종 강아지의 위치 좌표는?
function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;

  // 시작점 S 찾기
  let sr = 0, sc = 0;
  for (let r = 0; r < H; r++) {
    const c = park[r].indexOf('S');
    if (c !== -1) { sr = r; sc = c; break; }
  }

  // 방향 벡터
  const DIR = { 'N': [-1, 0], 'S': [1, 0], 'W': [0, -1], 'E': [0, 1] };

  // 명령 처리
  for (const cmd of routes) {
    const [d, stepStr] = cmd.split(' ');
    const step = Number(stepStr);
    const [dr, dc] = DIR[d];

    let nr = sr, nc = sc;
    let ok = true;

    // 한 칸씩 검증 이동
    for (let k = 0; k < step; k++) {
      nr += dr; nc += dc;
      if (nr < 0 || nr >= H || nc < 0 || nc >= W || park[nr][nc] === 'X') {
        ok = false; break;
      }
    }
    if (ok) { sr = nr; sc = nc; } // 전부 가능하면 위치 확정
  }

  return [sr, sc];
}
