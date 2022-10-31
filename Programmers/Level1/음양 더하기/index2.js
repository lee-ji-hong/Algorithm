function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

absolutes = [4,7,12];
signs = [true,false,true];
console.log(solution(absolutes, signs));

absolutes2 = [1,2,3];
signs2 = [false,false,true];
console.log(solution(absolutes2, signs2));