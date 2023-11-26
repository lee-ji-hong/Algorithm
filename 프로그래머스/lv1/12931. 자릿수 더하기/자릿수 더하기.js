function solution(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10; // 일의 자리 수를 더함
    n = Math.floor(n / 10); // 일의 자리 수를 없앰
  }

  return sum;
}