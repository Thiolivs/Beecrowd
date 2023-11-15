var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseFloat(lines.shift().trim());

for (i=0; i<N; i++){
    const [A, B, C] = lines[i].split(' ')
    let media = 0.2*A + 0.3*B + 0.5*C
    console.log(media.toFixed(1))
}
