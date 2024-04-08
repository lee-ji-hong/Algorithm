function solution(n, arr) {
  let answer,
    max = 0; //JavaScript에서 안전한 최소 정수값 혹은 (-(253 - 1))을 나타냅니다.
  for (let x of arr) {
    let sum = 0;
    x = String(x).split('');
    for (let i = 0; i < x.length; i++) {
      sum += parseInt(x[i]);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer.join('');
}

// function solution(n, arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = 0,
//       tmp = x;
//     while (tmp) {
//       sum += tmp % 10;
//       tmp = Math.floor(tmp / 10);
//     }
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// }

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
