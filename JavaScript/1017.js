var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');

var tempo = (valores.shift());
var vm = (valores.shift());

var dist = vm*tempo
var result = (dist/12).toFixed(3);
console.log(result);
