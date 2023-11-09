var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let valor = parseInt(input);

let anos = Math.floor(valor/365)
valor -= anos*365

let meses = Math.floor(valor/30)
valor -= meses*30

let dias = valor

console.log (anos+" ano(s)\n"+ meses+" mes(es)\n"+dias+ " dia(s)");
