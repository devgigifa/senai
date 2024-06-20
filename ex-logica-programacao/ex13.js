// 13. Faça um programa que calcule a média de uma lista de números.

let numNumeros = parseInt(prompt("Quantos números você quer calcular a média?"));

// array
let numeros = [];

for (let i = 0; i < numNumeros; i++) {
  let num = parseFloat(prompt("Digite o número: "));
  numeros.push(num);
}

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
let media = soma / numeros.length;

alert(`A média é ${media.toFixed(2)}`);