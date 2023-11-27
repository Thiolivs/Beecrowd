var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N=parseInt(lines.shift());

for (let i = 0; i<N; i++){
    var X = parseInt(lines.shift());
    var S = somaDivisores(X)
    if (S===X)
        console.log(X+" eh perfeito")
    else
        console.log(X+" nao eh perfeito")
}

function somaDivisores(num){
    var soma=0
    for (var j=1; j<num; j++){
        num%j===0? soma+=j: null
    }
    return soma
    
}
