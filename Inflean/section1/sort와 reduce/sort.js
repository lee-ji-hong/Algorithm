/**
 * arr.sort()
 *
 * 배열 재정렬
 * 주의! 배열 자체가 변경됨
 * 인수로 정렬 로직을 담은 함수를 받음
 **/

let code = ['a', 'c', 'e', 'd', 'b'];
code.sort();
console.log(code);

let arr = [27, 8, 5, 13];
/*진행 순서는 앞의 숫자 두개를 비교해서 더 작은 수를 앞에 */
arr.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
console.log(arr);
