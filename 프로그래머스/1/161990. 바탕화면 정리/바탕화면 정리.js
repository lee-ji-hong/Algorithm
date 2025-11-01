function solution(wallpaper) {
  let minR = Infinity, minC = Infinity;
  let maxR = -1, maxC = -1;

  for (let r = 0; r < wallpaper.length; r++) {
    const row = wallpaper[r];
    const first = row.indexOf('#');
    if (first === -1) continue;          // 이 행엔 파일 없음

    const last = row.lastIndexOf('#');
    minR = Math.min(minR, r);
    minC = Math.min(minC, first);
    maxR = Math.max(maxR, r + 1);        // 아래 경계는 +1
    maxC = Math.max(maxC, last + 1);     // 오른쪽 경계는 +1
  }

  return [minR, minC, maxR, maxC];
}

// wallpaper : 바탕화면의 상태 배열(.,#)
// 드래그를 하면 파일 선택 후 삭제 가능 
// 모든 파일을 삭제하는 최소한의 위치
