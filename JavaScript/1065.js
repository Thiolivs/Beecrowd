var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');
var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var C = parseInt(valores.shift());
var D = parseInt(valores.shift());
var E = parseInt(valores.shift());

V=[A,B,C,D,E]

let count=0

V.forEach((element) => {
    if(element%2==0){
  count++;
}});

console.log(count +" valores pares")
