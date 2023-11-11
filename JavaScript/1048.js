var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split('\n');
var salario = parseFloat(valores.shift());

let percent =" "
let novo = 0
let reajuste = 0


  if ( 0<= salario && salario <= 400.00 ){
    percent = "15 %"
    reajuste = salario*0.15
    novo=salario+reajuste
  }
  else if(400.01<= salario && salario <= 800.00){
    percent = "12 %"
    reajuste = salario*0.12
    novo=salario+reajuste
}
  else if (  800.01<= salario && salario <= 1200.00 ){
    percent = "10 %"
    reajuste = salario*0.10
    novo=salario+reajuste
}
  else if (  1200.01<= salario && salario <= 2000.00 ){
    percent = "7 %"
    reajuste = salario*0.07
    novo=salario+reajuste
}
  else if (  2000 <= salario){
    percent = "4 %"
    reajuste = salario*0.04
    novo=salario+reajuste
}


console.log("Novo salario: " + novo.toFixed(2));
console.log("Reajuste ganho: " + reajuste.toFixed(2));
console.log("Em percentual: " + percent);
