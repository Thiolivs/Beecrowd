var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
const space = ' '
const [codigo1, qtd1, valor1] = lines[0].split(space)
const [codigo2, qtd2, valor2] = lines[1].split(space)

const valorPago = (qtd1 * valor1) + (qtd2 * valor2)

console.log (`VALOR A PAGAR: R$ ${valorPago.toFixed(2)}`)
