function solution(s, e) {
    let answer = 0;
    let ch = Array.from({ length: 10001 }, () => 0); //boolean
    let dis = Array.from({ length: 10001 }, () => 0); //레벨
    let queue = [];
    queue.push(s);
    ch[s] = 1;
    dis[s] = 0;

    while(queue.push){
        let x = queue.shift();
        for(let nx of [x+1,x-1,x+5]){
            if(nx===e) return dis[x]+1;
            if(ch[nx]===0 && nx>0 &&nx<10001){
                ch[nx]=1
                queue.push(nx)
                dis[nx] = dis[x]+1 //x레벨보다 1레벨 높으니까 1레벨씩 +하는거
            }
        }
    }

    return answer;
}

console.log(solution(5, 14));

// 송아지의 위치가 수직선상의 좌표 점으로 주어지면