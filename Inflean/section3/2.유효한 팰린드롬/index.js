function solution(s){
    let answer="YES";
    // s=s.toLowerCase().replace(/[^a-z]/g, '');
    // if(s.split('').reverse().join('')!==s) return "NO";
    s=s.toLowerCase().replace(/[^a-z]/g, ''); // 문자를 소문자로 변경하고 알파벳이 아닌것들은 빈문자열로 반환한다.
    if(s.split('').reverse().join('')!==s) {
        return "NO";
    }
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));