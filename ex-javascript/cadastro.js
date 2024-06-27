// // Faça um programa que crie um  vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1,2,3,4,5,0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma que achar melhor. Vetor
// // MENU
// // 1 - cadastrar nome
// // 2 - excluir um nome
// // 4 - pesquisar se um nome está cadastrado
// // 5 - listar todos os nomes cadastrados em ordem alfabética
// // 0 - Sair do programa
let nomes = []
let opcao = -5

while (opcao != 0) {
    opcao = prompt("Escolha qual opção deseja: \n (1) cadastrar nome \n (2) excluir último nome \n (3) pesquisar se um nome está cadastrado \n (4) listar todos os nomes cadastrados em ordem alfabética \n (0) sair do programa")
    switch(opcao){
        case '1':
            nomes.push(prompt("Cadastre um nome: "))
            break
        case '2':
            nomes.pop()
            break
        case '3':
            if(nomes.includes(prompt("Nome existe?"))){
                alert("O nome está na lista!")
            }else{
                alert("O nome não está na lista!")
            }
            break
        case '4':
            alert(nomes.sort())
            break
        case 0:
            alert("Sair")
            break

    }
}
