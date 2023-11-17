var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let l1, n,X,Y;
l1 = input.split("\n");

size =l1.shift();

for (i=0; i< size; i++){
    
    n = l1.shift().split(" ");
    
    X=parseInt(n[0])
    Y=parseInt(n[1])
    
    if (isFinite(X/Y) === false)
        console.log("divisao impossivel")
    else 
        console.log(parseFloat(X/Y).toFixed(1));
    
  }
