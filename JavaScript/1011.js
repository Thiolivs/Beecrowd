var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');
var R = parseInt(valores.shift());
var VOLUME =  ((4/3.0) * 3.14159 * (R**3)).toFixed(3);
console.log("VOLUME = " + VOLUME);
