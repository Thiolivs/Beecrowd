var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift().trim());

for (let i = 0; i < 4*N; i+=4){
    let A = i+1;
    let B = i+2;
    let C = i+3;
    console.log(A +" "+ B +" "+ C +" PUM")
    
}
