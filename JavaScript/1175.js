var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var N = input.split('\n');

for(let i=0; i<10; i++){
    let aux = N[i]
    N[i]=N[19-i]
    N[19-i]=aux
}

for(let j=0 ; j<20 ; j++){
    console.log("N["+j+"] = " + N[j])
}
