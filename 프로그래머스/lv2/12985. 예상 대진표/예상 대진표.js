function solution(n,a,b)
{
    let answer = 0; 
    while( a !== b){ //둘의 번호가 일치하기 전까지 반복
        a = Math.ceil(a/2); //올림
        b = Math.ceil(b/2);
        answer ++;
    }
    return answer;
}

/*
토너먼트면..?머지 재귀?절대아니고...ㅇㅅㅇ멀까dfs일거같은데
브루트포스 엔딩..?
*/