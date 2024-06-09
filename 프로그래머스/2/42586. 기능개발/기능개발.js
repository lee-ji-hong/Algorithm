function solution(progresses, speeds) {
    let answer = [0];
    let term =[];
    let maxDay=[];

    for(let i=0; i< progresses.length; i++){
        let test = Math.ceil((100-progresses[i])/speeds[i]);
        term.push(test)
    }
    
    maxDay=term[0];
    
    for(let m=0,n=0; m<term.length; m++){
        if(term[m]<=maxDay){
            answer[n]+=1;
        }else{
            maxDay = term[m];
            answer[++n]=1;
        }
    }
    console.log(term)
    
    return answer;
}

//작업의 진도 = [progresses]
//개발 속도 = [speeds]
//배포는 순서대로 진행되어야 한다. 
//각 배포마다 몇개의 기능이 배포되는지 return