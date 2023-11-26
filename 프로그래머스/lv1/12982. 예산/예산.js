// function solution(d, budget) {
//   d.sort((a, b) => a - b); // 신청 금액을 오름차순으로 정렬

//   let count = 0; // 지원할 수 있는 부서의 수
//   let sum = 0; // 지원한 금액의 총합

//   for (let i = 0; i < d.length; i++) {
//     sum += d[i]; // 신청 금액을 더함

//     if (sum <= budget) {
//       count++;
//     } else {
//       break; // 예산을 초과하면 반복문 종료
//     }
//   }

//   return count;
// }

function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();
    //1. 배열 d의 모든 요소를 더한 합을 계산
    //2. 계산된 합이 주어진 budget보다 큰지 확인합니다.
    //3. 만약 합이 budget보다 크다면, d.pop()을 통해 배열 d의 마지막 요소를 제거합니다.
    //4. 2~3단계를 반복합니다. 합이 budget보다 작아질 때까지 요소를 계속 제거합니다.
    return d.length;
}

