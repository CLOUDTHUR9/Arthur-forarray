/*4 – Faça um programa que dê entrada manual de 10 números
armazene em um vetor, em seguida inverter a ordem de
armazenamento em outro vetor, utilize laços de repetição para
fazer essa atividade
Nome:Arthur Henrique Pereira Martins
*/

const teclado = require(`prompt-sync`)();
let cont : number [] = new Array(10);
let cont2 : number [] = new Array(10);
let x = 0;
for (let x = 1; x <= 10; x++){
    cont [x] = parseInt(teclado(`Digite o número do índice ${x}: `));
    
}
for(let y = 10; y >=1 ; y--){

        cont2 [x] = cont [y];
        x++;


}
console.log(cont);
console.log(cont2);