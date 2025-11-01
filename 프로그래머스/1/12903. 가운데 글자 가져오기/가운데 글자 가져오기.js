function solution(s){
    let answer = '';
    
    if(s.length%2===0){
        answer = s.slice(Math.floor(s.length/2)-1,Math.floor(s.length/2)+1)
    }else{
        answer = s[Math.floor(s.length/2)];
    }
    return answer;
}