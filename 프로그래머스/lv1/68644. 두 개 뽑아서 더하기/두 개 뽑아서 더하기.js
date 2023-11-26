function solution(numbers) {
    
const set = new Set();
    
numbers.forEach((value,index) => {
    for(let i=0;i<numbers.length; i++) {
        if(index !== i){
            set.add(value + numbers[i]);
        }
    }
});
    return Array.from(set).sort((a, b) => a - b);
}
