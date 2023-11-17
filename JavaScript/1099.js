var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift().trim());

for (let i=0; i<N; i++){
    const [A, B] = lines[i].split(' ')
    
    let min = Math.min(A, B);
    let max = Math.max(A, B);

    console.log(somaImpares(min,max))
}

function somaImpares(x,y){
    
    let soma = 0

    for (let i=(x+1); i<y; i++){
        if (i%2!==0){
            soma+=i
        }
    }
    return soma
}
