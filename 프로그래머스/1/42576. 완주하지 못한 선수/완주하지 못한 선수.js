function solution(participant, completion) {
    const map = new Map();
    
    // 참가자 카운트
    for (const p of participant) {
        map.set(p, (map.get(p) || 0) + 1);
    }

    // 완주자 카운트 차감
    for (const c of completion) {
        map.set(c, map.get(c) - 1);
    }
    
    // 남은 사람 찾기
  for (const [name, count] of map) {
    if (count > 0) return name;
  }
}

/**
participant : 마라톤 참여한 선수
completion : 완주한 선수 
return 완주하지 못한 선수 
**/ 