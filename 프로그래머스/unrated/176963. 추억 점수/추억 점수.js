function solution(name, yearning, photo) {
    var answer = [];
    for(let i=0; i<photo.length; i++) {
        let count = 0;
        for(let j=0; j<photo[i].length; j++){
            name.includes(photo[i][j]) ? count+= yearning[name.indexOf(photo[i][j])] : count+=0
        }
        answer.push(count)
    }
    return answer;
}