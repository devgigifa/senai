// Pedir 2 números aleatórios para o usuário e mostrar qual é o maior e qual é o menor. ex: 70 é maior que 23, 51 é menor que 52


let a, b


a = 80
b = 40


if(a > b){
    console.log(a + ' é maior que ' + b)
}else{
    console.log(a + ' é menor que ' + b)
}


// Escreva um programa em javascript que exiba a tabuada de um número fornecido pelo usuário, usando o laço for


let tabuada, result = ""
tabuada = Number(prompt("Tabuada do número:"))


for(let i = 1; i <= 24; i++){
    // result += tabuada + " x " + i + " = " + (tabuada * i) + "\n"
    result += `${tabuada} x ${i} = ${tabuada * i} \n`
}
alert(result)


// Exiba os números pares existentes entre 1 e 201, com while


let numero
while(numero <= 201){
    if(numero % 2 == 0)
    console.log(numero)
numero++
}


// Peça ao usuário que indique uma quantidade de números a serem digitados e calcule a média entre esses números. Com while


let qtdNums, num = 0, mediaNums = 0, controle = 0


qtdNums = parseInt(prompt("Digite a quantidade de números que deseja realizar a média:"))
while(controle < qtdNums){
    num += parseInt(prompt("Digite um número:"))
    controle++
}
mediaNums = num / qtdNums
alert(`A média é: ${mediaNums.toFixed(1)}`)
   


// Faça um programa que crie um  vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1,2,3,4,5,0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma que achar melhor. Vetor
// MENU
// 1 - cadastrar nome
// 2 - excluir um nome
// 3 - editar um nome
// 4 - pesquisar se um nome está cadastrado
// 5 - listar todos os nomes cadastrados em ordem alfabética
// 0 - Sair do programa


let nomes = []
let opcao = -5


while (opcao != 0) {
    opcao = prompt("Escolha qual opção deseja: \n (1) cadastrar nome \n (2) excluir um nome \n (3) editar um nome \n (4) pesquisar se um nome está cadastrado \n (5) listar todos os nomes cadastrados em ordem alfabética \n (0) sair do programa")
    switch(opcao){
        case '1':
            nomes.push(prompt("Cadastre um nome: "))
            break
        case '2':
            nomes.pop()
            break
        case '4':
            if(nomes.includes(prompt("Nome existe?"))){
                alert("O nome está na lista!")
            }else{
                alert("O nome não está na lista!")
            }
            break
        case '5':
            alert(nomes.sort())
            break
        case 0:
            alert("Sair")
            break


    }
}


// media com operador ternário
let n1, n2, n3, media, resultado


n1 = Number(prompt("Digite a nota 1:"))
n2 = Number(prompt("Digite a nota 2:"))
n3 = Number(prompt("Digite a nota 3:"))


media = (n1 + n2 + n3) / 3
resultado = media >= 7 ? "Aprovado" : media <= 3 ? "Reprovado" : "Recuperação"
alert(`${resultado} - Média Final: ${media.toFixed(2)}`)
