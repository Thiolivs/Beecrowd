var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift().trim());
let B = parseInt(lines.shift().trim());

let min = Math.min(A,B)
let max = Math.max(A,B)

let soma = 0

for(let i = min+1; i < max; i++){
    if (i%5 === 2 || i%5 === 3){
        console.log(i)
    } 
}
