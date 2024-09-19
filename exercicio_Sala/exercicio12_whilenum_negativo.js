let numero = 0;

while (numero >= 0) {
    numero = parseFloat(prompt("Digite um número (negativo para sair):"));
    console.log("Você digitou:", numero);
}

console.log("Número negativo digitado. Saindo do loop.");