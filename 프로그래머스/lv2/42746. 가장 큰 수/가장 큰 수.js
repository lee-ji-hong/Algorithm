function solution(numbers) {
    
    var answer = numbers.map(c=> c + '')
    .sort((a,b) => (b+a) - (a+b)).join(''); 
    // 숫자를 문자열로 변환하여 조합했을 때 큰 값이 앞에 오도록 내림차순으로 정렬
    return answer[0]==='0'? '0' : answer;
}

/*
가장 큰수니까 삽입정렬..? 모르겠다..ㅇㅅㅇ
이것도 10^5 이니까 o(1) 혹은 o(n)으로 접근하는게 좋아보임.

*/