var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift().trim());
let B = parseInt(lines.shift().trim());

let min = Math.min(A,B)
let max = Math.max(A,B)

let soma = 0

for(let i = min; i <= max; i++){
    if (i%13 !== 0){
        soma+=i
    } 
}

console.log(soma)
