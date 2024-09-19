/*
Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário.
 A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

Entrada
O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, 
quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

Saída
Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. 
No caso do salário, também deve haver um espaço em branco após o $.*/

// Função para calcular o salário do funcionário
function calcularSalario(numeroFuncionario, horasTrabalhadas, valorPorHora) {
    const salario = horasTrabalhadas * valorPorHora;
    return salario.toFixed(2); // Retorna o salário com duas casas decimais
}

// Leitura dos dados do funcionário
const numeroFuncionario = prompt("Digite o número do funcionário:");
const horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas:"));
const valorPorHora = parseFloat(prompt("Digite o valor que recebe por hora:"));

// Cálculo do salário
const salario = calcularSalario(numeroFuncionario, horasTrabalhadas, valorPorHora);

// Exibição do resultado
console.log(`Número do Funcionário: ${numeroFuncionario}`);
console.log(`Salário: R$ ${salario}`);



