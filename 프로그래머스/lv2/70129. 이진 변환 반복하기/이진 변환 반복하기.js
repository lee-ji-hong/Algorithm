function solution(s) {
    let binary = '';
    var answer = [];
    let count = 0;
    let length = 0;

  while( s!== '1'){      
        binary = s.replace(/0/g, '');
        length += s.length - binary.length;
        s = (binary.length).toString(2);
        count++;
    }
    answer.push(count,length);
    return answer;
}