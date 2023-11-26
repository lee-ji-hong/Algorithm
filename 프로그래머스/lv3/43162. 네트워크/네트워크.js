function solution(n, computers) {
    let answer = 0;                  // 네트워크의 개수를 담을 변수
    const visited = new Array(n).fill(false); // 방문 여부를 저장하는 배열

    function dfs(node) {
        visited[node] = true;  // 현재 노드를 방문했다고 표시

        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) { // 현재 노드와 연결된 노드 중에서 방문하지 않은 노드 찾기
                dfs(i); // 방문하지 않은 노드에 대해 DFS 수행
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) { // 아직 방문하지 않은 노드라면
            answer++;       // 네트워크 개수 증가
            dfs(i);         // 해당 노드부터 DFS 수행하여 연결된 모든 노드 방문
        }
    }

    return answer; // 최종적으로 찾은 네트워크 개수 반환
}


// 1.answer 변수는 네트워크의 개수를 나타내기 위한 변수입니다.

// 2.visited 배열은 노드의 방문 여부를 나타내기 위한 배열입니다. 처음에는 모든 노드가 방문하지 않은 상태로 초기화합니다.

// 3.dfs 함수는 깊이 우선 탐색(Depth-First Search) 알고리즘을 구현한 함수입니다. 노드 번호를 인자로 받아서 해당 노드와 연결된 모든 노드를 방문하도록 합니다.

// 4.첫 번째 반복문은 모든 노드에 대해 순차적으로 반복합니다. 만약 아직 방문하지 않은 노드라면, 해당 노드부터 시작하여 DFS를 수행하고 네트워크 개수를 증가시킵니다.

// 5.dfs 함수 내부에서 현재 노드를 방문했다고 표시하고, 해당 노드와 연결된 모든 노드 중에서 방문하지 않은 노드를 찾아서 재귀적으로 DFS를 수행합니다.