function solution(N, number) {
    const setList = Array.from({length: 8}, () => new Set());
    //test
    for (let i = 0; i < 8; i++) {
        setList[i].add(Number(String(N).repeat(i + 1)));
        for (let j = 0; j < i; j++) {
            for (const arg1 of setList[j]) {
                for (const arg2 of setList[i - j - 1]) {
                    setList[i].add(arg1 + arg2);
                    setList[i].add(arg1 - arg2);
                    setList[i].add(arg1 * arg2);
                    setList[i].add(Math.floor(arg1 / arg2));
                }
            }
        }
        if (setList[i].has(number)) {
            return i + 1;
        }
    }
    return -1;
}
