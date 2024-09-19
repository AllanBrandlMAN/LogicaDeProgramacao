/*Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, 
meses e dias.

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e 
todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses 
e alguns dias, como 360, 363 ou 364. 
Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.*/

function converterDiasParaAnosMesesDias(dias) {
    const anos = Math.floor(dias / 365);
    dias = dias % 365;
    const meses = Math.floor(dias / 30);
    dias = dias % 30;
    return { anos, meses, dias };
}

// Exemplo de uso:
const idadeEmDias = 15451; // Substitua este valor pelo número de dias desejado
const idadeConvertida = converterDiasParaAnosMesesDias(idadeEmDias);
console.log(`Idade: ${idadeConvertida.anos} anos, ${idadeConvertida.meses} meses e ${idadeConvertida.dias} dias.`);


