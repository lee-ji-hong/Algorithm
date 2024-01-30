function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let ch = Array.from({ length: n + 1 }, () => 0);
    path = [];

    for (let [a, b] of arr) {
        graph[a][b] = 1;
        // console.log(graph)
    }

    function DFS(v) {
        if (v === n) { //D(5)가 됐을 때 더하기
            answer++;
            console.log(path);
        } else {
            for(let i=1; i<=n; i++){
                console.log(v,i,graph[v][i],ch)
                if(graph[v][i]===1 && ch[i]===0){
                    ch[i]=1;
                    path.push(i);
                    // console.log(path)
                    DFS(i);
                    ch[i] = 0;
                    path.pop();
                }
            }
        }
    }
    path.push(1);
    ch[1]=1;
    DFS(1);
    return answer;
}

let arr = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));

