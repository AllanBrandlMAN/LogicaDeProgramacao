/*Leia um valor de ponto flutuante com duas casas decimais. 
Este valor representa um valor monetário. 
A seguir, calcule o menor número de notas e moedas possíveis 
no qual o valor pode ser decomposto. As notas consideradas 
são de 100, 50, 20, 10, 5, 2. As moedas possíveis 
são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. 
A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.*/

function calcularNotasEMoedas(valor) {
    let notas = [100, 50, 20, 10, 5, 2];
    let moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
    
    let resultado = { notas: {}, moedas: {} };
    
    for (let nota of notas) {
        let quantidade = Math.floor(valor / nota);
        valor -= quantidade * nota;
        resultado.notas[nota] = quantidade;
    }
    
    for (let moeda of moedas) {
        let quantidade = Math.floor(valor / moeda);
        valor -= quantidade * moeda;
        resultado.moedas[moeda] = quantidade;
    }
    
    return resultado;
}

function mostrarResultado(resultado) {
    console.log("NOTAS:");
    for (let nota in resultado.notas) {
        console.log(`${resultado.notas[nota]} nota(s) de R$ ${parseFloat(nota).toFixed(2)}`);
    }
    
    console.log("MOEDAS:");
    for (let moeda in resultado.moedas) {
        console.log(`${resultado.moedas[moeda]} moeda(s) de R$ ${parseFloat(moeda).toFixed(2)}`);
    }
}

// Exemplo de uso:
let valor = parseFloat(prompt("Informe o valor que deseja sacar: "))
let resultado = calcularNotasEMoedas(valor);
mostrarResultado(resultado);