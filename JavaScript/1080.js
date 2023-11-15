var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let maior =0
for(let i = 0; i < 100; i++){
    let numero = parseInt(lines.shift().trim());
    let pos=i+1


    if(numero>maior) { 
    maior=numero
    posmaior = pos}
}

console.log(maior);
console.log(posmaior);
