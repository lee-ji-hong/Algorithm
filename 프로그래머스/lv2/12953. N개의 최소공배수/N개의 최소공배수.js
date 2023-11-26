function colculate(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return lcm(num1, num2);
}

function solution(arr) {
    let lcm = colculate(arr[0],arr[1])

    for(let i = 2; i<arr.length; i++){
    lcm = colculate(lcm,arr[i]);           
    }

    return lcm;
}