function solution(elements) {
    const sumSet = new Set();
    const len = elements.length;
    for(let i = 1; i<= len; i++){
        for(let j = 0; j < len; j++){
            let seq = elements.slice(j,j+i)
           if(i+j>len){
                seq = [...seq, ...elements.slice(0, i+ j - elements.length)];
           }
            const sum = seq.reduce((acc, v) => acc + v,0);
            sumSet.add(sum);
        }
    }
    return sumSet.size;
}

