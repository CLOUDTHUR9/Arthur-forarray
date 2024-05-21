/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
Nome:Arthur Henrique Pereira Martins
*/
var teclado = require("prompt-sync")();
var cont = new Array(10);
var cont2 = new Array(10);
var x = 0;
for (var x_1 = 1; x_1 <= 10; x_1++) {
    cont[x_1] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x_1, ": ")));
}
for (var y = 10; y >= 1; y--) {
    cont2[x] = cont[y];
    x++;
}
console.log(cont);
console.log(cont2);
