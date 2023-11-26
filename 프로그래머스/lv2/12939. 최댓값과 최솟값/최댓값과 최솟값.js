function solution(s) {
    const array = s.split(" ");
    const minValue = Math.min(...array.map(Number));
    const maxValue = Math.max(...array.map(Number));

    return minValue.toString() + ' ' + maxValue.toString();
}