# 이진트리 순회(깊이우선탐색)

### 문제 설명

아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요


### 입력 설명



### 출력 설명
전위순회 : 1-2-4-5-3-6-7
중위순회 : 4-2-5-1-6-3-7
후위순회 : 4-5-2-6-7-3-1

### 문제풀이

<img width="400" alt="스크린샷, 2024-04-08 오전 1 26 31 jpeg" src="https://github.com/lee-ji-hong/Algorithm/assets/88364280/891c7eaf-0c37-440a-8619-cdb49e3015ef">

부모노드가 n이라고 했을때 왼쪽자식 노드는 n*2, 오른쪽 자식의 노드는 n*2+1 이라고 할 수 있다. 

전위순회의 코드는 아래와 같다. 

```js
function solution(n) {
  let answer;
  function DFS(v) {
    if(v > 7){ //종착지점
      return;
    }else{
      console.log(v);
      DFS(v*2);
      DFS(v*2+1);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
```

이것또한 스택프레임 구조만 이해하면 구현하기 어렵지 않다.

<img width="300" alt="스크린샷, 2024-04-08 오전 1 20 58 jpeg" src="https://github.com/lee-ji-hong/Algorithm/assets/88364280/c58d231a-6206-4221-8a0c-7b1358ec721e">

1. D(1)실행
  -  console.log(v) 1출력
  - DFS(v*2)인 DFS(2)실행
2. D(2)실행
  -  console.log(v) 2출력
  - DFS(v*2)인 DFS(4)실행
3. D(4)실행
  -  console.log(v) 4출력
  - DFS(v*2)인 DFS(9)실행
4. D(8)실행
  -  if(v > 7) return 실행되면서 종료
  -  D(4)의 복귀주소로 7째줄로 이동해서 다음 코드 실행
  
<img width="462" alt="스크린샷, 2024-04-08 오전 1 21 42 jpeg" src="https://github.com/lee-ji-hong/Algorithm/assets/88364280/7e931f3b-5e00-4cd3-b637-76099bbb92ad">

5. D(4)실행
  - DFS(v*2+1)인 DFS(9)실행
6. D(9)실행
  -  if(v > 7) return 실행되면서 종료
  -  D(4)의 복귀주소 8째줄로 이동해서 다음 코드 실행
7. D(4)실행
  -  console.log(v) 4출력
  - DFS(4) 종료
  - DFS(2) 복귀주소 7째줄로 이동해서 실행
    
<img width="410" alt="Restore State jpeg" src="https://github.com/lee-ji-hong/Algorithm/assets/88364280/cd93a85c-978d-4539-a509-6dfc89fbd250">

8. D(2)실행
  - DFS(v*2+1)인 DFS(5)실행
    
<img width="410" alt="Restore State jpeg" src="https://github.com/lee-ji-hong/Algorithm/assets/88364280/7ee9c1d2-bbc9-4b0d-861b-82b8b898b236">

9. D(5)실행
  -  console.log(v) 5출력
  - DFS(v*2)인 DFS(10)실행
10. D(10)실행
  -  if(v > 7) return 실행되면서 종료
  -  D(5)의 복귀주소 8째줄로 이동해서 다음 코드 실행

이런식으로 진행하면 된다. 그럼 결과적으로 아래와 같은 결과가 나옴

전위순회 : 1-2-4-5-3-6-7
중위순회 : 4-2-5-1-6-3-7
후위순회 : 4-5-2-6-7-3-1
