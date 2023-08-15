/*
A의 종류 = n;
B의 종류 = m;
종류별 모든 가능한 수 = (n+1)(m+1) 
*/

function solution(clothes) {
       
    const types = {};
    let result = 1;
    
    clothes.map((item) => {
        const type = item[1];
        const name = item[0];
       
        if (types[type]) {
            types[type].push(name);
        } else {
            types[type] = [name];
        }
    });
    
    Object.keys(types).forEach((type) => {
        result *= types[type].length + 1
        // console.log(types[type].length)
    })
    return result -1;
}