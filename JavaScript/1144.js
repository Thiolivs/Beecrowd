var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

for (let A = 1; A <= N; A++){

    let B = parseInt(Math.pow(A, 2));
    let B2 = parseInt(Math.pow(A, 2)+1);
    let C = parseInt(Math.pow(A, 3));
    let C2 = parseInt(Math.pow(A, 3)+1);

    console.log(`${A} ${B} ${C}`);
    console.log(`${A} ${B2} ${C2}`);
}
