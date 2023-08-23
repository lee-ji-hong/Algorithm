function solution(answers){
    let answer = [];
    let a1 = [1, 2, 3, 4, 5];
    let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let a1Sum = answers.filter((a,i) => a === a1[i%a1.length]).length;
    let a2Sum = answers.filter((a,i) => a === a2[i%a2.length]).length;
    let a3Sum = answers.filter((a,i) => a === a3[i%a3.length]).length;
    
    const maxScore = Math.max(a1Sum,a2Sum,a3Sum);
    
    if(a1Sum === maxScore) {answer.push(1)};
    if (a2Sum === maxScore) {answer.push(2)};
    if (a3Sum === maxScore) {answer.push(3)};
    return answer;
}