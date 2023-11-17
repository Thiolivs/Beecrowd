var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let k=0

while (true) {
    let [M, N] = lines[k].split(' ')
    k++

    if (M <= 0 || N <= 0) {
        break; // Encerra a leitura se M ou N for menor ou igual a zero
    }
    
    let min = Math.min(M, N);
    let max = Math.max(M, N);
    let sequencia = '';
    let soma = 0;
    
    for (let i = min; i <= max; i++) {
        sequencia += `${i} `;
        soma += i;
  }

  console.log(sequencia +`Sum=${soma}`);
}
