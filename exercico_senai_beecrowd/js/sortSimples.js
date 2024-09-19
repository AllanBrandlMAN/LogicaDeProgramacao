/*

Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.*/


let a = parseInt(prompt("Digite o valor de a:"));
let b = parseInt(prompt("Digite o valor de b:"));
let c = parseInt(prompt("Digite o valor de c:"));


ordenarValores(a, b, c);

function ordenarValores() {

    let valores = [a, b, c];

    let valoresOriginais = [...valores];

    valores.sort((a, b) => a - b);

    console.log("Valores na sequência original:");
    valoresOriginais.forEach(valor => console.log(valor));

    console.log("");

    console.log("Valores em ordem crescente:");
    valores.forEach(valor => console.log(valor));

}


ordenarValores();