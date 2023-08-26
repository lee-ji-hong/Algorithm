function solution(brown, yellow) {
    const answer = [];
    const totalBlocks = brown + yellow;
    
    for (let width = 3; width <= totalBlocks; width++) {
        if (totalBlocks % width === 0) {
            const height = totalBlocks / width;
            const borderBlocks = (width + height) * 2 - 4;
            
            if (borderBlocks === brown) {
                answer.push(width, height);
                return answer.sort((a, b) => b - a);
            }
        }
    }
}
