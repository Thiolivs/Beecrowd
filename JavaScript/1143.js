var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift().trim());

for (let i = 1; i < N+1; i++){
    let A = i;
    let B = i*A;
    let C = i*B;
    console.log(A +" "+ B +" "+ C)
    
}
