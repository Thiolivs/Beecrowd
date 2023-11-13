var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift().trim());
let dentro =0
let fora =0
for (i=0; i<N; i++){
    let numero = parseInt(lines.shift().trim());
    if (numero>=10 && numero<=20)
        dentro++
        else 
        fora++
}
console.log(dentro+ " in")
console.log(fora+ " out")
