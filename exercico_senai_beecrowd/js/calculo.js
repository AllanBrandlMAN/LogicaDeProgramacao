/*Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. 
Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". 
O valor deverá ser apresentado com 2 casas após o ponto.*/

const linha1 = prompt("Digite o código, quantidade e valor unitário da peça 1 (separados por espaço):").split(" ");
const linha2 = prompt("Digite o código, quantidade e valor unitário da peça 2 (separados por espaço):").split(" ");

// Extração dos valores
const [cod1, qtde1, valor1] = linha1;
const [cod2, qtde2, valor2] = linha2;

// Cálculo do valor total a ser pago
const total = (parseInt(qtde1) * parseFloat(valor1)) + (parseInt(qtde2) * parseFloat(valor2));

// Exibição do resultado
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);