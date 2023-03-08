function solution(N, number) {
    var answer = -1;
    const set = new Array(8).fill().map(() => new Set());

    for (let i = 0; i < 8; i++) {
        set[i].add(Number(N.toString().repeat(i+1)));
        for (let j = 0; j < i; j++) {
            for (let item1 of set[j]) {
                for (let item2 of set[(i-j-1)]) {
                    set[i].add(item1 + item2);
                    set[i].add(item1 - item2);
                    set[i].add(item1 * item2);
                    set[i].add(item1 / item2);
                }
            }
        }

        if(set[i].has(number)) {
            answer = i+1;
            break;
        }
    }
    return answer;
}