/*1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
Aluno:Arthur Henrique Pereira Martins
*/
const diasDaSemana = [`segunda-feira`,`terça-feira`, `quarta-feira`, `quinta-feira`, `sexta-feira`,`sábado`, `domingo`];
    
    const atividades = [`Treinar`, `dormir`, `cozinhar`, `escutar msuica`,`assistir filmes`, `jogar`, `comer`];
    
    for (let x = 0; x < 7; x++) {
        const dia = diasDaSemana[x];
        const atividade = atividades[x];
    
        console.log(`No ${dia}, gosto de ${atividade}.`);
    }