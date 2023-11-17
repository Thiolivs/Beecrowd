var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let A=0
let G=0
let D=0

while (true) {
    let valor = parseInt(lines.shift());
    if (valor === 4) {
        console.log("MUITO OBRIGADO")
        console.log("Alcool: "+A)
        console.log("Gasolina: "+G)
        console.log("Diesel: "+D)
        break; 
    }
    
    if (valor === 1)
        A++
    else if (valor === 2)
        G++
    else if (valor === 3)
        D++
}
