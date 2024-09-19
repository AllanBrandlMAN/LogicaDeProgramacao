/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. 
Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
*/


let a = parseFloat(prompt("Digite o valor de a:"));
let b = parseFloat(prompt("Digite o valor de b:"));
let c = parseFloat(prompt("Digite o valor de c:"));


function calcularBhaskara(a, b, c) {
    let delta = b * b - 4 * a * c;

    if (a === 0 || delta < 0) {
        return "Impossível calcular";
    }

    let raizDelta = Math.sqrt(delta);
    let x1 = (-b + raizDelta) / (2 * a);
    let x2 = (-b - raizDelta) / (2 * a);

    return `As raízes são: x1 = ${x1}, x2 = ${x2}`;
}



let resultado = calcularBhaskara(a, b, c);
console.log(resultado);


