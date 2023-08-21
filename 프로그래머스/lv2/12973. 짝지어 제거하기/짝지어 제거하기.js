function solution(s) {
    const sArray = s.split(''); // 문자열을 배열로 변환
    const stack = []; // 스택을 만듦
    for (let i = sArray.length - 1; i >= 0; i--) { // 문자열 배열을 거꾸로 순회
        if (sArray[i] === stack.at(-1)) // 현재 문자와 스택의 맨 위 문자가 같다면
            stack.pop(); // 스택의 맨 위 문자를 제거
        else
            stack.push(sArray[i]); // 현재 문자를 스택에 추가
    }
    return stack.length === 0 ? 1 : 0; // 스택이 비어있으면 1, 아니면 0 반환
}
/*
sArray = [b,a,a,b,a,a]
stack = []

1. stack = [b]
2. stack = [b,a]
3. stack = [b]
4. stack = []
5. stack = [a]
6. stack = []

=> 문자열의 길이가 10^6 이니까 적어도 o(1) 혹은 o(n) 으로만 알고리즘을 짜야한다. 
위의 stack은 시간복잡도가 o(n) 따라서 가능.
이어붙인 중복을 제거하는 문제였기 때문에 여기에서 힌트를 얻었으면 좋았을거같음.
*/