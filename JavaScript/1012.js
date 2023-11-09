var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split(' ');
var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

console.log("TRIANGULO: " + ((A*C)/2).toFixed(3));
console.log("CIRCULO: " + (3.14159*(C**2)).toFixed(3));
console.log("TRAPEZIO: " + (((A+B)*C)/2).toFixed(3));
console.log("QUADRADO: " + (B**2).toFixed(3));
console.log("RETANGULO: " + (A*B).toFixed(3));
