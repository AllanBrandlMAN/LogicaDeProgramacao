/*Leia um valor inteiro, que é o tempo de duração em segundos de um determinado 
evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), 
convertido para horas:minutos:segundos, conforme exemplo fornecido.*/


function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    return `${horas}:${minutos}:${segundosRestantes}`;
}


const duracaoEmSegundos = Number(prompt("Informe o valor em segundos: "));
const tempoFormatado = formatarTempo(duracaoEmSegundos);
console.log(tempoFormatado); 