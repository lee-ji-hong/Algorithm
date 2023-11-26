function solution(arr) {
    var answer = [];
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
    arr == '' ? arr.push(-1) : arr
    return arr;
}