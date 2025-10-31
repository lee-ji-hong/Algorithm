// 현재 순위를 Map으로 저장해두고 swap할때 배열과 Map을 동시에 업데이트하면 각 호출을 O(1)에 처리 
function solution(players, callings) {
  const answer = players.slice();           // 원본 보존
  const pos = new Map();                    // 이름 -> 현재 인덱스

  for (let i = 0; i < answer.length; i++) {
    pos.set(answer[i], i);
  }

  for (const name of callings) {
    const i = pos.get(name);
    if (i === 0) continue;                  // 이미 선두면 패스

    const prevName = answer[i - 1];

    // 배열에서 자리 바꾸기
    [answer[i - 1], answer[i]] = [answer[i], answer[i - 1]];

    // 위치 Map 동기화
    pos.set(name, i - 1);
    pos.set(prevName, i);
  }

  return answer;
}
