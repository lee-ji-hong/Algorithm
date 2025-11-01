function solution(n){
    let arr = String(n).split('')
    arr.sort((a,b) => b-a)
    return parseInt(arr.join(''));
    
}