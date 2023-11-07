var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');
var raio = parseFloat(valores.shift());
var A = (3.14159 * (raio**2)).toFixed(4);
console.log("A=" + A);
