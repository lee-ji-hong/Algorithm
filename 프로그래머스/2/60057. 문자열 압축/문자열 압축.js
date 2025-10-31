function solution(s) {
   const n = s.length;
  if (n === 1) return 1;

  let ans = n;

  for (let k = 1; k <= Math.floor(n / 2); k++) {
    let outLen = 0;

    // 이전 블록과 카운트
    let prev = s.slice(0, k);
    let count = 1;

    for (let i = k; i < n; i += k) {
      const cur = s.slice(i, i + k);
      if (cur === prev) {
        count++;
      } else {
        // prev 블록을 결과에 반영
        // count가 1이면 숫자 없음, >1이면 자릿수만큼 숫자 길이 +
        if (count > 1) outLen += String(count).length;
        outLen += prev.length;

        // 다음 비교 준비
        prev = cur;
        count = 1;
      }
    }
    // 마지막 블록 반영
    if (count > 1) outLen += String(count).length;
    outLen += prev.length;

    ans = Math.min(ans, outLen);
  }

  return ans;
}

//2a2ba3c 처럼 문자열 압출
// 문자열을 2개 단위로 잘라서 압축
// 1개 이상 단위로 문자열을 잘라서 압축해서 표현한 문자열 중 가장 짧은 것의 길이
// 어떤 기준으로 문자열이 가장 짧은지 어떻게 아는거지?

