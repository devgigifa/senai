// Jogo da velha

let button, quebraLinha, jogada = 1
let tabuleiro = new Array(3)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}

for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro.length; j++){
    button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('id', 'bt' + i + '' + j)
    button.setAttribute('class', 'btjogo' + i)
    button.setAttribute('onclick', 'marca(' + i + ',' + j + ')')
    button.append(document.createTextNode(''))
    document.body.append(button)
}
}

function marca(linha, coluna){
    marcarCasa('bt' + linha + '' + coluna)
}

function marcarCasa(nomeButton){
    if(jogada % 2 == 0){
        document.getElementById(nomeButton).innerText = "O"
        document.getElementById(nomeButton).style.color = 'black'
    }else{
        document.getElementById(nomeButton).innerText = "X"
        document.getElementById(nomeButton).style.color = 'gray'
}
document.getElementById(nomeButton).disabled = true
jogada++
    if(jogada >= 5){
        encerraJogo()
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function encerraJogo(){
    //Linha 1
    if(document.getElementById('bt00').innerText == document.getElementById('bt01').innerText && document.getElementById('bt01').innerText == document.getElementById('bt02').innerText && document.getElementById('bt00').innerText != ''){
        let mensagem = 'Jogo finalizado! \n Vencedor: ' + document.getElementById('bt00').innerText
        exibirTextoNaTela('p', mensagem)
        for(cont in tabuleiro){
            document.getElementById('bt0' + cont).style.color = 'purple'
        }
    }
    //Linha 2
    if(document.getElementById('bt10').innerText == document.getElementById('bt11').innerText && document.getElementById('bt11').innerText == document.getElementById('bt12').innerText && document.getElementById('bt10').innerText != ''){
        let mensagem = 'Jogo finalizado! \n Vencedor: ' + document.getElementById('bt10').innerText
        exibirTextoNaTela('p', mensagem)
        for(cont in tabuleiro){
            document.getElementById('bt1' + cont).style.color = 'purple'
        }
    }
    //Linha 3
    if(document.getElementById('bt20').innerText == document.getElementById('bt21').innerText && document.getElementById('bt21').innerText == document.getElementById('bt22').innerText && document.getElementById('bt20').innerText != ''){
        let mensagem = 'Jogo finalizado! \n Vencedor: ' + document.getElementById('bt20').innerText
        exibirTextoNaTela('p', mensagem)
        for(cont in tabuleiro){
            document.getElementById('bt2' + cont).style.color = 'purple'
        }
    }
    //Coluna 1
    if(document.getElementById('bt00').innerText == document.getElementById('bt10').innerText && document.getElementById('bt10').innerText == document.getElementById('bt20').innerText && document.getElementById('bt00').innerText != ''){
        let mensagem = 'Jogo finalizado! \n Vencedor: ' + document.getElementById('bt20').innerText
        exibirTextoNaTela('p', mensagem)
        for(cont in tabuleiro){
            document.getElementById('bt' + cont + '0').style.color = 'purple'
        }
    }
    //Coluna 2
    if(document.getElementById('bt01').innerText == document.getElementById('bt11').innerText && document.getElementById('bt11').innerText == document.getElementById('bt21').innerText && document.getElementById('bt01').innerText != ''){
        let mensagem = 'Jogo finalizado! \n Vencedor: ' + document.getElementById('bt21').innerText
        exibirTextoNaTela('p', mensagem)
        for(cont in tabuleiro){
            document.getElementById('bt' + cont + '1').style.color = 'purple'
        }
    }
    //Coluna 3
    if(document.getElementById('bt02').innerText == document.getElementById('bt12').innerText && document.getElementById('bt12').innerText == document.getElementById('bt22').innerText && document.getElementById('bt02').innerText != ''){
        let mensagem = 'Jogo finalizado! \n Vencedor: ' + document.getElementById('bt22').innerText
        exibirTextoNaTela('p', mensagem)
        for(cont in tabuleiro){
            document.getElementById('bt' + cont + '2').style.color = 'purple'
        }
    }
    // Diagonal direita
    if(document.getElementById('bt00').innerText == document.getElementById('bt11').innerText && document.getElementById('bt11').innerText == document.getElementById('bt22').innerText && document.getElementById('bt00').innerText != ''){
        let mensagem = 'Jogo finalizado! \n Vencedor: ' + document.getElementById('bt22').innerText
        exibirTextoNaTela('p', mensagem)
        for(cont in tabuleiro){
        document.getElementById('bt' + cont + '' + cont).style.color = 'purple'
        }
    }
    // Diagonal esquerda
    if(document.getElementById('bt20').innerText == document.getElementById('bt11').innerText && document.getElementById('bt11').innerText == document.getElementById('bt02').innerText && document.getElementById('bt20').innerText != ''){
        let mensagem = 'Jogo finalizado! \n Vencedor: ' + document.getElementById('bt02').innerText
        exibirTextoNaTela('p', mensagem)
        let contRegressiv = tabuleiro.length -1
        for(cont in tabuleiro){
        document.getElementById('bt' + cont + '' + contRegressiv--).style.color = 'purple'
        }
    }
}











    