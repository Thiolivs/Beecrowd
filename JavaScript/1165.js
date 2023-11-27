var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N=parseInt(lines.shift());

for (let i = 0; i<N; i++){
    var X = parseInt(lines.shift());

    if (ehPrimo(X))
        console.log(X+" eh primo")
    else
        console.log(X+" nao eh primo")
}

function ehPrimo(num){
    var count=0
    for (var j=2; j<num; j++){
        num%j===0? count++: null
    }
    
    if(count===0) 
        return true
    else
        return false
    
}
