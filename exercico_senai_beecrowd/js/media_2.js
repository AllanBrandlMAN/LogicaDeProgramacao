/*
Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. 
A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. 
Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. 
Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error". */

let a =parseFloat(prompt("Digite o primeiro valor (0 a 10)"));
let b =parseFloat(prompt("Digite o primeiro valor (0 a 10)"));
let c =parseFloat(prompt("Digite o primeiro valor (0 a 10)"));


let pesoA = 2;
let pesoB = 3;
let pesoC = 5;

let media = parseFloat;

media = (a *pesoA + b*pesoB + c*pesoC) / (pesoA + pesoB + pesoC);
console.log(`A media do aluno ${media.toFixed(1)}`)
