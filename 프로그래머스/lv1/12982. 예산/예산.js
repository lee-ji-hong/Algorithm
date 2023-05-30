function solution(d, budget) {
  d.sort((a, b) => a - b); // 신청 금액을 오름차순으로 정렬

  let count = 0; // 지원할 수 있는 부서의 수
  let sum = 0; // 지원한 금액의 총합

  for (let i = 0; i < d.length; i++) {
    sum += d[i]; // 신청 금액을 더함

    if (sum <= budget) {
      count++;
    } else {
      break; // 예산을 초과하면 반복문 종료
    }
  }

  return count;
}
