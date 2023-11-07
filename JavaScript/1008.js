var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');
var NUMBER = parseInt(valores.shift());
var HOURS = parseFloat(valores.shift());
var VAL_HOURS = parseFloat(valores.shift());
var SALARY = (HOURS * VAL_HOURS).toFixed(2)
console.log("NUMBER = " + NUMBER);
console.log("SALARY = U$ " + SALARY);
