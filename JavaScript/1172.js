var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X=parseInt(lines.shift());
for (let i = 0; i<10; i++){
    X<=0? X=1 : null
    console.log("X["+i+"] = "+X)
    X=parseInt(lines.shift());
}
