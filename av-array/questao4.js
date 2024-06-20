// 4) Peça ao usuário para digitar os nomes de 5 alunos e suas notas na prova de Matemática. Calcular a média de todas as notas acima de 5,0.

let nomes = [];
let notas = [];

for(let i = 1; i <= 5; i++) {
  nomes.push(prompt("Digite o nome do aluno " + i));
  notas.push(Number(prompt("Digite a nota do aluno " + i)));
}

let somaNotas = 0;
let contagemNotas = 0;

for(let i = 0; i < notas.length; i++) {
  if(notas[i] > 5) {
    somaNotas += notas[i];
    contagemNotas++;
  }
}
let media = (somaNotas/contagemNotas).toFixed(2);
alert("A média das notas acima de 5 é: " + media);