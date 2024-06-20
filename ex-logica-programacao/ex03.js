// 3. altere o programa anterior para fornercer a tabuada do número que o usuário pedir

let tabuada, result = ""
tabuada = Number(prompt("Tabuada do número:"))

for(let i = 1; i <=10; i++){
    // result += tabuada + " x " + i + " = " + (tabuada * i) + "\n"
    result += `${tabuada} x ${i} = ${tabuada * i} \n`
}
alert(result)