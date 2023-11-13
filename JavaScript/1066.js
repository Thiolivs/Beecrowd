var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseInt(lines.shift().trim());
  
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }

  if (numero > 0) {
    positivos++;
  } else if (numero < 0) {
    negativos++;
  }
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);
