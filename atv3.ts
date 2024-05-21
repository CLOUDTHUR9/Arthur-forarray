/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
Nome:Arthur Henrique Pereira Martins
*/
const teclado = require(`prompt-sync`)();

let maior : number = 0;
let cont : number [] = new Array(10);
for (let x = 1; x <= 9; x++){
    cont [x] = parseInt(teclado(`Digite o número do índice ${x}: `));
    
}
for(let x = 1; x <= 9; x++){

    if(cont [x] > maior){

        maior = cont [x];
    }
}
console.log(`O maior numero é ${maior}`)