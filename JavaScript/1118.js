var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


while (true){
            let count = 0
            let soma = 0

            while (count !== 2) {
                let nota = parseFloat(lines.shift());
            
                if (nota<0 || nota>10.0) 
                    console.log("nota invalida")
                else {
                    count++
                    soma = soma+nota
                    
                    if (count === 2){
                        media = soma/2
                        console.log("media = "+media.toFixed(2))
                    }
                }
            }
            
            console.log("novo calculo (1-sim 2-nao)")
            let digito = parseInt(lines.shift());

            
           while (digito < 1 || digito > 2) {
                console.log("novo calculo (1-sim 2-nao)")
                digito = parseInt(lines.shift());
           }
            
            if(digito==2)
                break;
}
