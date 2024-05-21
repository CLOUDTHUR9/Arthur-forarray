/* VETORES
2-Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
Aluno:Joao Gabriel Sabino de Araujo
*/

const teclado = require(`prompt-sync`)();

let resultados = new Array(10);

for (let x = 0; x < 10; x++) {
    const operacao = teclado(`Digite uma operação aritmética (ex: 2 + 3): `);
    resultados[x] = eval(operacao);
}

console.log(`Resultados das operações: `);
for (let x = 0; x < 10; x++) {
    console.log(`Resultado ${x + 1}: ${resultados[x]}`);
}