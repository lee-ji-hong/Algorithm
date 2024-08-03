const fs = require('fs');
let arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

    let answer = 0;
    let n = Number(arr[0]);
    let m = Number(arr[1]);
    let graph = Array.from(Array(n+1), ()=> []);
    let visited = Array.from({length:n+1}, ()=>false);

    for (let i = 2; i < arr.length; i++) {
    let [a, b] = arr[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a); // 양방향 연결
    }

    function DFS(v){
        visited[v]=true;
        answer++;
        for(let i=0; i<graph[v].length; i++){
            if(!visited[graph[v][i]]){
                DFS(graph[v][i]);
            }
        }
    }
    visited[1]=true;
    DFS(1)
    console.log(answer-1);
