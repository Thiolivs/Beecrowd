var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valores = lines[0].split(' ').map(Number);
const maior = (a, b) => (a + b + Math.abs(a - b)) / 2;
const maiorABC = valores.reduce(maior);
console.log(`${maiorABC} eh o maior`);
