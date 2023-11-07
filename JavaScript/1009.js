var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');
var NOME = (valores.shift());
var SALARIO = parseFloat(valores.shift());
var VENDAS = parseFloat(valores.shift());
var TOTAL = (SALARIO + VENDAS*0.15).toFixed(2)
console.log("TOTAL = R$ " + TOTAL);
