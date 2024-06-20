// 12. Dada uma lista de números, encontre o maior e o menor valor.
let numElem = prompt("Digite o número de elementos da lista:");
let lista = [];


for (let i = 0; i < numElem; i++) {
  let num = prompt(`Número ${i + 1}:`);
  lista.push(Number(num));
}


let maior = Math.max(...lista);
let menor = Math.min(...lista);


alert(`O maior número da lista é ${maior}`);
alert(`O menor número da lista é ${menor}`);
