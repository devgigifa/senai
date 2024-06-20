// 5) Localizar o maior valor dentro de um array de números

let valor = [17434, 26483, 30745, 49636, 36472]

let maior = 0
let indiceMaior
for(let i = 0; i < valor.length; i++){
    if(valor[i] > maior){
        maior = valor[i]
        indiceMaior = i
    }
}
console.log(valor[indiceMaior])