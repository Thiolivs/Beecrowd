var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines.shift())

for(let i=0; i<N; i++){
    var F = parseInt(lines.shift())
    if (F===1)
        console.log("Fib(1) = 1")
   else {
    let anterior=0
    let proximo=1
    let Soma = 0
   for(let j=0; j<F-1; j++){
    Soma = anterior + proximo
    anterior=proximo
    proximo=Soma
    }
    console.log(`Fib(${F}) = ${Soma}`)
    }
}
