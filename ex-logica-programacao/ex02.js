// 2. imprima a tabuada do 5

let tabuada, result = ""
tabuada = 5

for(let i = 1; i <= 10; i++){
    result += `${tabuada} x ${i} = ${tabuada * i} \n`
}
console.log(result)