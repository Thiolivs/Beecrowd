var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var m

m=parseInt(lines.shift());

var vet = [];

for (let i = 0; i < m; i++)
{
    vet[i]=i;
}

for (let v=0, j=0; v < 1000; v++)
{
    console.log(`N[${v}] = ${vet[j]}`);
    j++;

    if(j == m)
    {
        j=0;
    }
}
