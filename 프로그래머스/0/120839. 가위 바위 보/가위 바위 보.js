// 가위는 2 바위는 0 보는 5로 표현
function solution(rsp) {
    const answer = [];
    const array = rsp.split('');
    
    for(let i=0; i<array.length; i++){
    answer.push(
        array[i] === '2' ? '0' : 
        array[i] === '0' ? '5' : 
        array[i] === '5' ? '2' : 
        ''
    );
    }
    return answer.join('');
}