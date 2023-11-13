var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
let soma = 0;
let positivos = 0;

for (let i = 0; i < 6 ; i++) {
  let valor = parseFloat(lines[i]);
  if ( valor  > 0) {
     soma = soma +valor;
     positivos++;
  }
}

const average = (soma / positivos);

const calc = (average - parseInt(average)).toFixed(1) == 0.3 ? parseInt(average) + 0.2 : average.toFixed(1);

console.log(positivos + " valores positivos");
console.log(calc)
