const fs = require('fs');

function main() {
    let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    let [N, h] = [+input.shift(), input.map(x => +x)];
    let stack = [],
        visible = 0;

    for (let i = 0; i < N; i++) {
        while (visible !== 0 && stack[visible - 1] <= h[i]) {
            visible--;
        }

        stack[visible++] = h[i];
    }

    console.log(visible);
}

main();