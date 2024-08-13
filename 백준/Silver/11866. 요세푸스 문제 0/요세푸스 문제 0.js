const fs = require('fs');
const [n, k] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let result = [];
let queue = Array.from({ length: n }, (_, i) => i + 1);
let index = 0;

while (queue.length > 0) {
    index = (index + k - 1) % queue.length;  // 현재 큐의 길이 내에서 인덱스를 계산
    result.push(queue.splice(index, 1)[0]);  // 계산된 인덱스에서 요소 제거 및 결과에 추가
}

console.log(`<${result.join(', ')}>`);
