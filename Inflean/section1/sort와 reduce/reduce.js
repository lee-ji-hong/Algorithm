/**************************************
 * arr.reduce()
 *

 **************************************/

//배열의 모든 수 합치기

let arr = [1, 2, 3, 4, 5];

//for , for of , forEach

let result = 0;
arr.forEach((num) => {
  result += num;
});

console.log(result);

//reduce : 원하는 값을 돌면서 최종 값을 반환한다.
// *인수로 함수를 받음
// (누적 계산값, 현재값) => {return 계산값};
//prev : 누적된 계산 값
//cur : 현재 계산 값

const gres = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(gres);

let userList = [
  { name: 'a', age: 30 },
  { name: 'b', age: 10 },
  { name: 'c', age: 15 },
  { name: 'd', age: 18 },
  { name: 'e', age: 20 },
  { name: 'f', age: 24 },
];

let sol = userList.reduce((prev, cur) => {
  if (cur.age > 20) {
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(sol);
