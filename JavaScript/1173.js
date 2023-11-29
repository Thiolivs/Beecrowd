var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var N = []
for(let i=0; i<10; i++){
    N[i]=Number(input)
    console.log("N["+i+"] = "+input)
    input*=2

}
