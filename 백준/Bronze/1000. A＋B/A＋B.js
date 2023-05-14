const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const [a, b] = line.split(' ').map((str) => parseInt(str, 10));
  console.log(a + b);
  rl.close();
});
