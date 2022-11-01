/**
 * forEach() : 반복 바깥으로 빠져나오거나 배열 내 특정 항목들을 건너뛸 수 없다는 것이다.
 * forEach가 각 항목을 반복 접근한다.
 * 
 */
const array1 = ['apple','banana','dog','cat'];

array1.forEach( function(element, index) {
    console.log(element);
    console.log(array1[index]);
});
