// 6) Crie 2 Arrays, no primeiro você pedirá para o usuário digitar 10 números.
// Faça um código para copiar para o segundo Array, apenas os números ímpares existentes no primeiro Array.

let array1 = []
for(let i = 0; i <10; i++){
    array1.push(prompt("Digite um número:"))
}
let array2 = []
for (var i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 1) {
      array2.push(array1[i]);
    }
  } 
  alert(`Os números ímpares são: ${array2}`);