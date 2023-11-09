var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');

var dist = (valores.shift());

var result = dist*2;
console.log(result + " minutos");
