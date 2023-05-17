function solution(x) {
    //하샤드 수 -> 두 수의 합 이 x로 나누어 떨어지면 하샤드 
    let number = 0;
    x.toString().split('').map(item => number+=parseInt(item));
    return x % number=== 0;
}