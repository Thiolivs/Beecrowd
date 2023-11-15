var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var n = parseInt(lines.shift());

for (i=1; i<11; i++){
    console.log(i+" x " + n + ' = ' + (n * i));
}
