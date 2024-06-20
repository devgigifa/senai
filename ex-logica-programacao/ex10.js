// 10. Faça um programa que calcule o valor da série: 1 + 1/2 + 1/3 + ... + 1/10.
function calcular() {
    let valor = 0;
    for (let i = 1; i <= 10; i++) {
      valor += 1/i;
    }
    return valor;
  }
 
  console.log(calcular());