console.clear();
var teclado = require("prompt-sync")();
var y = 1;
var z = 1;
var maximo = -1;
maximo = maximo + parseInt(teclado("Digite um n\u00FAmero: "));
for (var x = 0; x <= maximo; x++) {
    y = y * z;
    z++;
    console.log(y);
}
