/*Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, 
representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.*/


function calcularSalario(nomeVendendor, salarioFixo, vendasEfetuadas) {
    let salario = (salarioFixo + (vendasEfetuadas * 15) / 100);
    return salario.toFixed(2); // Retorna o salário com duas casas decimais
}

// Leitura dos dados do funcionário
const nomeVendendor = prompt("Digite o nome do vendedor:");
const salarioFixo = parseFloat(prompt("Digite o salario do vendedor:"));
const vendasEfetuadas = parseFloat(prompt("Digite o valor de vendas realizadas:"));

// Cálculo do salário
const salario = calcularSalario(nomeVendendor, salarioFixo, vendasEfetuadas);

// Exibição do resultado
console.log(`Número do Funcionário: ${nomeVendendor}`);
console.log(`Salário: R$ ${salario}`);
