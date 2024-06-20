// 1) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode
// montar seu sorvete com até 3 bolas (sabores).
// Criar um programa que simule esse sistema:
// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido

// == MENSAGENS e VALIDAÇÕES ==
// 1 -&gt; Sabor adicionado! OU Limite de sabores atingido, remova um sabor!
// 2 -&gt; Sabor removido! OU Não existem sabores adicionados!
// 3 -&gt; Camada 1 - Sabor X, Camada 2 - Sabor Y, etc. OU Seu sorvete não possui
// sabores!
// 4 -&gt; Pedido realizado! OU Adicione pelo menos um sabor!

let sorvete = [];

while (true) {
  let opcao = prompt(`Selecione uma opção:\n1 - Adicionar sabor\n2 - Remover sabor\n3 - Visualizar sorvete\n4 - Finalizar pedido`);

  switch (opcao) {
    case '1':
      if (sorvete.length < 3) {
        let sabor = prompt('Qual sabor deseja adicionar:');
        sorvete.push(sabor);
        alert('Sabor adicionado!');
      } else {
        alert('Limite de sabores atingido, remova um sabor!');
      }
      break;
    case '2':
      if (sorvete.length > 0) {
        let sabor = prompt('Digite o sabor a ser removido:');
        let indice = sorvete.indexOf(sabor);
        if (indice !== -1) {
          sorvete.splice(indice, 1);
          alert('Sabor removido!');
        } else {
          alert('Não existem sabores adicionados!');
        }
      } else {
        alert('Não existem sabores adicionados!');
      }
      break;
    case '3':
      if (sorvete.length > 0) {
        let visualizacao = '';
        for (let i = 0; i < sorvete.length; i++) {
          visualizacao += `Camada ${i + 1} - ${sorvete[i]}\n`;
        }
        alert(visualizacao);
      } else {
        alert('Seu sorvete não possui sabores!');
      }
      break;
    case '4':
      if (sorvete.length > 0) {
        alert('Pedido realizado!');
        break;
      } else {
        alert('Adicione pelo menos um sabor!');
      }
    default:
      alert('Opção inválida, tente novamente!');
  }
  if (opcao === '4' && sorvete.length > 0) {
    break;
  }
}