//else if, crie um programa que peça ao usuário para digitar três notas individualmente (uma vez por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "aprovado!". Caso seja menor que 7 e maior que 3 "Recuperação", caso contrário mostre uma mensagem "Reprovado!"


alert('Calcule sua média.')


let nota1, nota2, nota3


nota1 = Number(prompt('Digite sua primeira nota: '))
nota2 = Number(prompt('Digite sua segunda nota: '))
nota3 = Number(prompt('Digite sua terceira nota: '))


// média


let media = (nota1 + nota2 + nota3) / 3


function verificarAprovacao(media){
    if(media >= 7){
        alert(`${media.toFixed(1)}: Você foi aprovado!`);
    }else if(media > 3){
        alert(`${media.toFixed(1)}: Você necessita realizar a recuperação!`);
    } else{
        alert(`${media.toFixed(1)}: Você foi reprovado!`);
    }
}


verificarAprovacao(media);