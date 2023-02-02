const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input));
    process.exit();
  });

function solution(input) {
  let str = input.shift();
  // str = str.replace('\r', ''); // vscode, fs모듈에서 \r 삭제.
  const n = input.shift();
  // input = input.map(el => el.replace('\r', '')) // vscode, fs모듈에서 \r 삭제.
  const leftArr = str.split('');
  const rightArr = [];

  for (let i = 0; i < n; i++) {
    switch (input[i][0]) {
      case 'L':
        if (leftArr.length) rightArr.push(leftArr.pop());
        break;
      case 'D':
        if (rightArr.length) leftArr.push(rightArr.pop());
        break;
      case 'B':
        if (leftArr.length) leftArr.pop();
        break;
      case 'P':
        leftArr.push(input[i][2]);
        break;
    }
  }
  const answer = leftArr.concat(rightArr.reverse()).join('');
  return answer;
}