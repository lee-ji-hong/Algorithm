// set 객체 생성
// 이중 for문을 이용해서 모든 경우의 수 합을 구한다. 
function solution(numbers) {
    let sum = new Set();
    
    for(let i=0;i<numbers.length; i++){
        for(let k=i+1; k<numbers.length; k++){
            if(k === numbers.length)return;
            sum.add(numbers[i]+numbers[k]);
        }
    }
    return [...sum].sort((a,b) => a-b)
}
