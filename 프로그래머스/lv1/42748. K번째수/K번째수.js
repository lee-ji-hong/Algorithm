function solution(array, commands) {
    var answer = [];
    commands.forEach(command => {
        const ij = array.slice(command[0]-1,command[1]);
        const sort = ij.sort((a,b) => a-b);
        const k = sort[command[2]-1]
        answer.push(k)
        console.log(answer)
    })
    return answer;
}