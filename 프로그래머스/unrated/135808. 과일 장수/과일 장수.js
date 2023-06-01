function chunk(data = [], size = 1) {
  const arr = [];
    
  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
}

function solution(k, m, score) {
    score.sort((a,b) => b-a)
    var answer = 0;
    const array = chunk(score,m);
    
    for(let i = 0; i<array.length; i++){
        const min = Math.min.apply(null, array[i]);
        if(array[i].length == m ) {
            answer += (min * m);
        }
        answer+= 0;
    }
    return answer;
}