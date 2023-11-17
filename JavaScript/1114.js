var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true) {
    let M = parseFloat(lines.shift().trim());

    if (M === 2002) {
        console.log("Acesso Permitido")
        break; 

    } else 
        console.log("Senha Invalida")
}
