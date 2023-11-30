var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i<100; i++){
    var A=parseFloat(lines.shift());
    A<=10? console.log("A["+i+"] = "+A.toFixed(1)) : null
}
