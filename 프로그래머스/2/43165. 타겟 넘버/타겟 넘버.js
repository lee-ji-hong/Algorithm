function solution(numbers, target){
    let answer = 0;
    
    function DFS(x,value){
        if(x<numbers.length){
            DFS(x+1, value+numbers[x]);
            DFS(x+1, value-numbers[x]);
        }else{
            if(value === target){
            answer+=1;    
            }
            
        }
    }
    
    DFS(0,0)
    return answer;
}