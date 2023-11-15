var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift().trim());
let dentro =0
let fora =0
for (i=0; i<N; i++){
    let numero = parseInt(lines.shift().trim());
    
    if (numero===0)
        console.log("NULL")
    else if (numero >0 && numero%2===0)
        console.log("EVEN POSITIVE")
    else if (numero <0 && numero%2===0)
        console.log("EVEN NEGATIVE")
    else if (numero >0 && numero%2!==0)
        console.log("ODD POSITIVE")
    else if (numero <0 && numero%2!==0)
        console.log("ODD NEGATIVE")
}
