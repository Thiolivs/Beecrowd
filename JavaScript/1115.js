var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let l1, l2;
l1 = input.split("\n").map(int);
l2 = input.split(" ").map(int);

l2.shift();

for (i=0; i< l1.length; i++){
    
    X=l1[i];
    Y=l2[i];
    
    if (X>0 && Y>0)
        console.log("primeiro")
    else if (X<0 && Y>0)
        console.log("segundo")
    else if (X<0 && Y<0)
        console.log("terceiro")
    else if (X>0 && Y<0)
        console.log("quarto")
    else if (X === 0 || Y === 0) {
        break;
    }
  }
  
 function int(item) {return parseInt(item, 10)}
