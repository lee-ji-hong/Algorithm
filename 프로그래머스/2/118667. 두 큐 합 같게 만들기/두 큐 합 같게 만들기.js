function solution(queue1, queue2) {
  const n1 = queue1.length, n2 = queue2.length;
  const N = n1 + n2;

  const sum = a => a.reduce((x, y) => x + y, 0);
  let s1 = sum(queue1), s2 = sum(queue2);
  const total = s1 + s2;
  if (total % 2) return -1;
  const target = total / 2;
  if (s1 === target) return 0;

  let h1 = 0, h2 = 0, moves = 0;
  const LIMIT = 2 * N;           // 외우기 쉬운 상한

  while (moves <= LIMIT) {
    if (s1 === target) return moves;

    if (s1 > target) {           // q1 -> q2
      const x = queue1[h1++];
      if (x === undefined) return -1;
      s1 -= x; s2 += x;
      queue2.push(x);
    } else {                     // q2 -> q1
      const x = queue2[h2++];
      if (x === undefined) return -1;
      s2 -= x; s1 += x;
      queue1.push(x);
    }
    moves++;
  }
  return -1;                     // 상한 내에 못 맞추면 불가
}
