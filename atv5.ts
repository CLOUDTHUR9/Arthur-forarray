/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
Nome:Arthur Henrique Pereira Martins
*/

const teclado = require(`prompt-sync`)();
let cont : number [] = new Array(10);
let crescente = 0;
for (let x = 1; x <= 10; x++){
    cont [x] = parseInt(teclado(`Digite o número do índice ${x}: `));
        for(let y = 1; y <= 10; y++){
            if (crescente < cont[y]){
                crescente = cont[x];
                cont[x] = cont[y];
        }
    }
}
for(let x = 1; x <= 10; x++){
    console.log(`Em ordem crescente ${cont[x]}`);
}
