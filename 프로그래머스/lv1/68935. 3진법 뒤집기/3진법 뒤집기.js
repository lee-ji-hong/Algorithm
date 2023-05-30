function solution(n) {
    let ternary = '';
    
    while(n > 0) {
        ternary +=(n % 3);
        n = Math.floor(n/3);
    }
    return parseInt(ternary,3);
}