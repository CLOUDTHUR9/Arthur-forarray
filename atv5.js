/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
Nome:Arthur Henrique Pereira Martins
*/
var teclado = require("prompt-sync")();
var cont = new Array(10);
var crescente = 0;
for (var x = 1; x <= 10; x++) {
    cont[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, ": ")));
    for (var y = 1; y <= 10; y++) {
        if (crescente < cont[y]) {
            crescente = cont[x];
            cont[x] = cont[y];
        }
    }
}
for (var x = 1; x <= 10; x++) {
    console.log("Em ordem crescente ".concat(cont[x]));
}
