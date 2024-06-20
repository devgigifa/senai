// 9. Imprima os números de 1 a 100, substituindos os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}