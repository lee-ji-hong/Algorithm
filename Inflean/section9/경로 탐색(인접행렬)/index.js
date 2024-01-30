function solution(n,arr) {
    let answer = 0;
    let graph=Array.from(Array(n+1), ()=> Array(n+1).fill(0)); //graph: 인접행렬을 만들 2차원 배열
    let ch=Array.from({length:n+1},()=>0);
    path=[]; //현재 탐색 중인 경로를 저장하는 배열

    //인접 행렬
    for(let [a,b] of arr){
        graph[a][b]=1; //방향그래프라는 뜻
    }

    function DFS(v) {
        if(v === n) {
            answer++;
            console.log(path);
        }
        else{
            // 가지뻗기
            for(let i=1; i<=n; i++){
                if(graph[v][i]===1 && ch[i]===0){
                    ch[i]=1;
                    path.push(i);
                    DFS(i);
                    ch[i] = 0;
                    path.pop();
                }
            }
        }
    }
    path.push(1); //출발점 1은 무조건 처음에 push
    ch[1]=1; //출발점은 무조건 1 처리해주기(안하면 오류남. 없애보기)
    DFS(1);
    return answer; 
}

let arr = [[1,2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]];
console.log(solution(5,arr));