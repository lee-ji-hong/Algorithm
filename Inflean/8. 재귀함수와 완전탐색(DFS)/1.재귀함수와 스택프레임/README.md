# 재귀함수

재귀함수는 자기 자신을 호출하는 함수라는 뜻이다. DFS가 재귀적으로 동작하는 것을 이해해보자

### 문제 설명

자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.

### 입력 설명

첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.

### 출력 설명

첫째 줄에 출력한다.

### 입력예제 1

3

### 출력예제 1

1
2
3



# 문제풀이
```js
function solution(n){
    function DFS(L){
        if(L===0)return;
        else{
            DFS(L-1)
            console.log(L);
        }
    }
    DFS(n)
}

solution(3)
```
> 출력 결과
> 1
> 2
> 3
```js
function solution(n){
    function DFS(L){
        if(L===0)return;
        else{
            console.log(L);
            DFS(L-1)
        }
    }
    DFS(n)
}

solution(3)
```
> 출력 결과
> 3
> 2
> 1

두 함수의 console 위치만 바뀌었을 뿐인데 어째서 출력 결과가 바뀌는 걸까? 이건 스택 구조의 흐름때문인데 이는 스택프레임에 대해 이해가 필요하다. 

### 스택프레임
<img width="400" alt="Restore State jpeg" src="https://github.com/lee-ji-hong/Algorithm/assets/88364280/1a4eb3fd-35d8-4519-a151-c52b34163b8a">

스택프레임은 스택구조에서 호출 순서를 정할때 함수가 호출되면서 사용하는 하나의 순서 덩어리라고 볼 수 있다. 

함수가 호출될 때 스텍 프레임이 생성되어 쌓이고, 함수가 종료되면 함께 소멸한다. 

스택 프레임에는 매개변수, 지역변수, 복귀주소 등의 정보를 담고 있다. 


맨 위의 코드로 실행 순서를 살펴보자면 

<img width="400" alt="Restore State jpeg" src="https://github.com/lee-ji-hong/Algorithm/assets/88364280/5c2ea9ea-86c6-4f66-90a5-f2550dc67afb">

1. d(3)실행 (매개변수 : 3,지역변수,복귀주소:12번째 줄 정보 담고있는 스택프레임 쌓임)
  - DFS(L-1)인 d(2)실행
  - d(2)실행되면서 console실행을 못했기때문에 함수 종료가 안되어서 계속 쌓여있음
2. d(2)실행 (매개변수 : 2,지역변수,복귀주소:12번째 줄 정보 담고있는 스택프레임 쌓임)
  - DFS(L-1)인 d(1)실행
  - d(1)실행되면서 console실행을 못했기때문에 함수 종료가 안되어서 계속 쌓여있음
3.d(1)실행 (매개변수 : 1,지역변수,복귀주소:12번째 줄 정보 담고있는 스택프레임 쌓임)
4.d(0)실행 (매개변수 : 0,지역변수,복귀주소:12번째 줄 정보 담고있는 스택프레임 쌓임)
  - L===0 이므로 return하면서 함수 종료
  - D(0)스택프레임 소멸
  - D(1)스택프레임으로 돌아감

<img width="400" alt="Restore State jpeg" src="https://github.com/lee-ji-hong/Algorithm/assets/88364280/2be190d4-9f7e-43a5-919c-dfbdecebd172">

5. d(1)
  - 복귀주소인 12라인으로 돌아가서 console.log(L)실행되어 1출력되고 함수 종료
  - D(1)스택프레임 소멸
  - D(2)스택프레임으로 돌아감
    
6. d(2)
  - 복귀주소인 12라인으로 돌아가서 console.log(L)실행되어 2출력되고 함수 종료
  - D(2)스택프레임 소멸
  - D(3)스택프레임으로 돌아감
    
7. d(3)
  - 복귀주소인 12라인으로 돌아가서 console.log(L)실행되어 3출력되고 함수 종료
  - D(3)스택프레임 소멸
  - solution 함수 종료
