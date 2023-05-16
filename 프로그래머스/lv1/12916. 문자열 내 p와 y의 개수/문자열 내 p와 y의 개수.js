function solution(s){
    const p = s.toLowerCase().split('').filter(str => str === 'p').length;
    const y = s.toLowerCase().split('').filter(str => str === 'y').length;
    return  p === 0 && y === 0 ? true : p == y ? true :false;
}