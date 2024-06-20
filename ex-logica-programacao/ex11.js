// 11. Conte quantos números pares e ímpares existem de 1 a 100.

// // Exibe os números pares entre 1 e 100
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }

// // Exibe os números ímpares entre 1 e 100
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }

function contarParesEImpares() {
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`A quantidade de números pares é: ${pares}`);
    console.log(`A quantidade de números ímpares é: ${impares}`);
}

contarParesEImpares();