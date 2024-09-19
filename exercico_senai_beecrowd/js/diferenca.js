/*
Leia quatro valores inteiros A, B, C e D. 
A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.*/
let diferenca = 0;
let a = parseInt(prompt("Digite o primeiro valor"));
let b = parseInt(prompt("Digite o segundo valor"));
let c = parseInt(prompt("Digite o terceiro valor"));
let d = parseInt(prompt("Digite o quarto valor"));


console.log(`(${a} ${b}) (${c} ${d})`);

diferenca = ((a * b) - (c * d));
console.log(`a DIFERENÇA e: ${diferenca}`);