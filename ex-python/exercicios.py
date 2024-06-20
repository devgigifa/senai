# Desafio
# Criar um aplicativo para cadastro de perguntas e respostas

# • O sistema deve ter um menu de opções
# • O sistema deve limitar o cadastro de até 10 perguntas
# • O sistema deve listar as perguntas e respostas
# • Ao selecionar a opção jogar, deve iniciar o jogo
# • O jogo não pode iniciar se não tiver pelo menos 3 perguntas cadastradas

perguntas_respostas = {}
def cadastrar_pergunta():
    if len(perguntas_respostas) <= 10:
        pergunta = input("Digite a pergunta:")
        resposta = input("Digite a resposta:")
        perguntas_respostas[pergunta] = resposta
        print("Pergunta cadastrada com sucesso!")
    else:
        print("Limite de perguntas atingido")
    
def listar_perguntas():
    if perguntas_respostas:
            print("Perguntas e respostas cadastradas:")
            for pergunta, resposta in perguntas_respostas.items():
                 print(f"Pergunta: {pergunta} - Resposta: {resposta}")
    else:
         print("Nenhunma pergunta cadastrada!")

def jogar():
    if len(perguntas_respostas) >= 3:
        print("Iniciando o jogo!")
        for pergunta, resposta in perguntas_respostas.items():
            resposta_usuario = input(f"{pergunta}: ")
            if resposta_usuario.lower() == resposta.lower():
                print("Resposta certa!")
            else:
                print(f"Resposta errada! A resposta certa é {resposta}.")
    else:
        print("Não é possível iniciar o jogo sem pelo menos 3 perguntas cadastradas!")

def main():
    while True:
        print("Menu de opções:")
        print("1. Cadastrar pergunta")
        print("2. Listar perguntas")
        print("3. Jogar")
        print("4. Sair")
        opcao = input("Digite o número da opção desejada: ")
        if opcao == "1":
            cadastrar_pergunta()
        elif opcao == "2":
            listar_perguntas()
        elif opcao == "3":
            jogar()
        elif opcao == "4":
            print("Saindo...")
            break
        else:
            print("Digite uma das opções!")

if __name__ == "__main__":
    main()


# calculadora 
repetidor = True
while repetidor:
    operacao = input('Qual operação deseja realizar: \n' + '1 - soma \n' + '2 - subtração \n' + '3 - multiplicação \n' + '4 - divisão \n')
    num1 = int(input('Digite o primeiro número:'))
    num2 = int(input('Digite o segundo número:'))
    if operacao == '1':
        soma = (num1 + num2)
        print(soma)
    elif operacao == '2':
        subtracao = num1 - num2
        print(subtracao)
    elif operacao == '3':
        multiplicacao = num1 * num2
        print(multiplicacao)
    elif operacao == '4':
        divisao = num1 / num2
        print(divisao)
    else:
        print('Digite um número válido.')


# Desenvolva um programa que solicite um número ao usuário e determine se é par ou ímpar.

repetidor = True
while repetidor:
    num = int(input('Digite um número para verificar se é par ou ímpar:'))
    if num % 2 == 0:
        print('É par')
    else:
        print('É ímpar')


# Elabore um programa que converta uma temperatura em graus Celsius para Fahrenheit e exiba o resultado.

print('Conversor de celsius para fahrenheit')
repetidor = True
while repetidor:
    celsius = int(input('Quantos graus celsius: \n'))
    fahrenheit = (celsius * 9/5) + 32
    print(fahrenheit)


# Faça um programa que solicite ao usuário três notas e calcule a média aritmética delas.
    
nota1 = int(input('Digite sua primeira nota:'))
nota2 = int(input('Digite sua segunda nota:'))
nota3 = int(input('Digite sua terceira nota:'))

media = (nota1 + nota2 + nota3) / 3
print(media)


# Crie um programa que solicite três números ao usuário e determine qual é o maior deles.

repetidor = True
while repetidor:
    print('Qual número é maior')
    num1 = int(input('Digite o primeiro número:'))
    num2 = int(input('Digite o segundo número:'))
    num3 = int(input('Digite o terceiro número:'))
    if (num1 >= num2) and (num1 >= num3):
        maior = num1
    elif (num2 >= num1) and (num2 >= num3):
        maior = num2
    else:
        maior = num3
    print(maior)
