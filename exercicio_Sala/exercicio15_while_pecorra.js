

let array = ['allan','coisa', 'luz', 'parar','voce', 'lua'];

let i = 0;

while (i < array.length) {
    if (array[i] === "parar") {
        break;
    }
    console.log(array[i]);
    i++;
}