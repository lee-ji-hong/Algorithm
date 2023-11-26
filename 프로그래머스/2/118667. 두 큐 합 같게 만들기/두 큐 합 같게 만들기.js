function solution(queue1, queue2) {
    const cq = queue1.concat(queue2);
    const n = cq.length;
    let answer = 0;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0,);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0,);
    let p1 = 0;
    let p2 = Math.floor(n / 2);

    while (p1 < n & p2 < n) {
        if (sum1 === sum2) {
            return answer
        }
        else if (sum1 > sum2) {
            const tmp = cq[p1++];
            sum1 -= tmp;
            sum2 += tmp;
        }
        else if (sum1 < sum2) {
            const tmp = cq[p2++];
            sum1 += tmp;
            sum2 -= tmp;
        }
        answer++;
    }

    return -1;
}