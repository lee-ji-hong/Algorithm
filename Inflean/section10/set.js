// 중복을 허용하지 않는 집합 , 따라서 같은 문자열을 많이 넣어도 똑같은 결과값 나옴
let string = new Set('abcde');
let many = new Set('abcdddddde');
console.log(string)
console.log(many.size)
many.add('f')
console.log(many)

for(let variable of many){
  console.log(variable)
}

let split = new Set('testttttt'.split(''))
console.log(split)

