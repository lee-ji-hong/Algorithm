function solution(s){
    let answer="YES";
    s= s.toLowerCase(); // 대문자 변환
    let len = s.length;
    for( let i=0; i<Math.floor(len/2); i++) {
        if(s[i]!=s[len-i-1]){
            answer = "NO";
        }
    }
    return answer;
}

let str="goooG";
console.log(solution(str));