// Lista de Atividades 1 - Professor Dennis

// 1) Crie uma função que receba dois números e retorne a soma.

function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2, 3))


// 2) Crie uma função que receba um array de strings e retorne o maior string.

function maiorString(array) {
    return array.reduce((a, b) => a.length > b.length ? a : b, '');
  }
  
  const array = ['Giovanna', 'Nicolas', 'Larissa', 'Ana'];
  console.log(maiorString(array));


// 3) Crie uma função que receba um objeto e retorne suas chaves.

function retornando(objeto) {
    return Object.keys(objeto)
}

let produtos = {produto: 'ventilador', preco: '69.99'}
let chaves = retornando(produtos)
console.log(chaves)


// 4) Crie uma função que converta um valor booleano para string.

function boolToString(booleano) {
    return booleano === 0 ? 'false' : 'true';
  }
  console.log(boolToString(0)); 
  console.log(boolToString(1)); 

// 5) Crie uma função que receba uma data e retorne o dia da semana.

function diaSemana(data) {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return dias[data.getDay()];
  } 

  const data = new Date('2023-08-30T14:30:00');
  console.log(diaSemana(data)); 