function solution(arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        const row = [];
        const variable = arr1[i].length;
        
        for(let j = 0; j < variable; j++){
            row.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(row);
    }
    return answer;
}