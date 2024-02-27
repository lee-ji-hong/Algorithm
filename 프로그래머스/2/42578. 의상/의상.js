function solution(clothes) {
    let answer = 1;
    let categoryMap = new Map();
    
    for(let [itemName, category] of clothes) {
        if(categoryMap.has(category)) {
            categoryMap.set(category, categoryMap.get(category) + 1);
        }else {
            categoryMap.set(category, 1)
        }
    }
    
    for (let count of categoryMap.values()) {
        answer*=(count+1)
    }

    return answer -1;
}