// function solution(s){
//     const p = s.toLowerCase().split('').filter(str => str === 'p').length;
//     const y = s.toLowerCase().split('').filter(str => str === 'y').length;
//     return  p === 0 && y === 0 ? true : p == y ? true :false;
// }

// 대문자와 소문자가 섞인 문자열 s 
// s-> p의 개수와 y의 개수가 같으면 true / false
function solution(s){
    const array = s.toLowerCase().split('');
    let p = 0,y=0;
    
    for(let i=0; i<array.length; i++){
       if(array[i] === 'p'){
           p+=1;
       }else if(array[i] === 'y'){
           y+=1;
       } 
    }
    return p === y ? true : false; 
}