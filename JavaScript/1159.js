var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X=parseInt(lines.shift());

while (X!==0){
    let count = 0
    
    n = X%2 === 0 ? X : X+1
    
    for (let i=0; i<5; i++){
        
        count = count + n
        n = n + 2
        
    }
    
    console.log(count)

    
    X=parseInt(lines.shift());
}
