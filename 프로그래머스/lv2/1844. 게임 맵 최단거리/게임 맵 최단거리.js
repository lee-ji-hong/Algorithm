function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    
    const dx = [1, -1, 0, 0]; // 우, 좌, 하, 상
    const dy = [0, 0, 1, -1];
    
    const queue = [[0, 0, 1]]; // 시작 위치와 거리 정보를 담는 큐
    const visited = new Array(rows).fill().map(() => new Array(cols).fill(false)); // 방문 여부를 체크하는 배열
    
    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();
        
        if (x === rows - 1 && y === cols - 1) {
            return distance; // 도착 지점에 도달한 경우 거리 반환
        }
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }
    
    return -1; // 도착 지점에 도달하지 못한 경우
}
/*
흰색으로만 갈수 있는 길 
가장 빠른 방법으로 길 찾는거 
-> bfs 로 푸는거?
*/