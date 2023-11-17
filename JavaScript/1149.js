var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var A 
var N=0 
var soma=0

A = parseInt(lines.shift());
N = parseInt(lines.shift());

while (N <= 0)
{
    N = parseInt(lines.shift());
}

for(let i = 0; i < N; i++) 
{
    soma=(soma+A+i);
}

console.log(soma);
