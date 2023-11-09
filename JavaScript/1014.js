var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');

var A = (valores.shift());
var B = parseFloat(valores.shift());
var MEDIA = (A/B).toFixed(3);
console.log(MEDIA + " km/l");
