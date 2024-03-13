function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

//새로운 인스턴스 생성
var stack1 = new Stack();
console.log(stack1);

// 1. 들여다보기(peeking)
// 스택의 마지막에 추가된 항목을 들여다보는 것(peeking)은 마지막에 추가된 항목을 스택 자료 구조에서 제거하지 않고 반환하는 것을 의미한다.
// 들여다보기는 마지막에 추가된 항목을 다른 변수와 비교해 마지막에 추가된 항목을 자료 구조에서 제거해야 할지 결정 하기 위해 주로 사용된다.
