// 길을 o,장애물을 x
// 조건 1 : 방향 이동할때 공원을 벗어나는지
// 조건 2 : 이동중 장애물이 있는지
// 조건에 실패하면 해당 명령을 무시하고 다음 명령 수행
// 공원을 나타내는 배열 park, 로봇 강아지가 수행할 배열 routes
// 최종 강아지의 위치 좌표는?
function solution(park, routes) {
    const H = park.length, W = park[0].length;
    const DIR = { N:[-1,0],S:[1,0],W:[0,-1],E:[0,1]};

    // 시작점 S 구하는 코드
    let sr = 0, sc = 0; 
    for(let r =0; r<H; r++){
        const c = park[r].indexOf('S');
        if(c !== -1){ sr = r; sc = c; break; }
    }

    for (const cmd of routes) {
        const [d, raw] = cmd.split(' ');
        const step = Number(raw);
        const [dr, dc] = DIR[d];
        
        let nr =sr, nc = sc; // 명령 수행 후 이동한 위치
        let visited = true;
        
        for(let k =0; k<step; k++){
            nr+=dr; nc+=dc;
            if(nr<0 || nr>=H || nc <0 || nc>=W || park[nr][nc] === 'X'){
                visited = false; break;
            }
        }
        if(visited){ sr=nr; sc=nc;}
    }
    
    return [sr,sc];
}
