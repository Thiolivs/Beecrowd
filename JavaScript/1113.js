var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let line1, line2, x, y;

line1=input.split("\n").map(covert);
line2=input.split(" ").map(covert);

line2.shift();

for (i=0; i< line1.length; i++){
    
    x=line1[i];
    y=line2[i];
    
    if (x < y) {
        console.log('Crescente');
    } else if (x > y) {
        console.log('Decrescente');
    } else {
        break;
    }
}
function covert(item){return parseInt(item,10)}
