var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let valor = parseInt(input);

let horas = Math.floor(valor/3600)
valor -= horas*3600

let minutos = Math.floor(valor/60)
valor -= minutos*60

let segundos = valor

console.log (horas+":"+minutos+":"+segundos);
