var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var s = 0;

for (let i=1, j=1; i<=39; i+=2, j*=2){
    s = s + (i/j)
}

console.log(s.toFixed(2))
