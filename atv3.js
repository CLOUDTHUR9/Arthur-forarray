/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
const teclado = require(`prompt-sync`)();
Nome:Arthur Henrique Pereira Martins
*/
var teclado = require("prompt-sync")();
var maior = 0;
var cont = new Array(9);
for (var x = 0; x <= 9; x++) {
    cont[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, ": ")));
}
for (var x = 0; x <= 9; x++) {
    if (cont[x] > maior) {
        maior = cont[x];
    }
}
console.log("O maior numero \u00E9 ".concat(maior));
