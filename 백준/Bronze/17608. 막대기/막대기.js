const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let ins = require('fs').readFileSync(path).toString().trim().split('\n')

let n = +ins[0]
let arr = ins.slice(1).map((s) => +s).reverse()

let max = arr[0]
let res = 1

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]
    res++
  }
}

console.log(res)