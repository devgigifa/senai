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



// Lista de Atividades 2 - Professor Dennis

// 1) Crie uma função que receba um nome e salva o nome obtido num array e retorna verdadeiro ou falso.

let nomes = ["Giovanna", "Nicolas", "Athos"];

function recebeNome(nome) {
  if (nome) {
    nomes.push(nome);
    return true;
  } else {
    return false;
  }
}
console.log(recebeNome("Nicolas")); 
console.log(recebeNome()); 

// 2) Crie uma função que ao ser chamada retorne a lista de array com os nomes.

function getNomes() {
  let nomes = ['Giovanna', 'Nicolas', 'Larissa', 'Ana']
  return nomes
}

console.log(getNomes())

// 3) Crie uma função que recebe um index e um novo nome e atualize o nome dentro do array.

let nome = ['Giovanna', 'Nicolas', 'Larissa', 'Ana'];

function atualizaNome(index, novoNome) {
if (index >= 0 && index < nome.length) {
  nome[index] = novoNome;
} else {
  console.error('Índice inválido');
}
}

atualizaNome(2, 'Joana');
console.log(nomes);

// 4) Crie uma função que ao receber um index o nome seja excluído.

const nom = ["João", "Maria", "Pedro", "Ana"];
console.log(nom);

function excluirNome(nom, indexOuNome) {
  if (typeof indexOuNome === 'number') {
    if (indexOuNome < nom.length) {
      nom.splice(indexOuNome, 1);
    } else {
      console.log("Índice inválido");
    }
  } else if (typeof indexOuNome === 'string') {
    const index = nom.indexOf(indexOuNome);
    if (index !== -1) {
      nom.splice(index, 1);
    } else {
      console.log("Nome não encontrado");
    }
  } else {
    console.log("Parâmetro inválido");
  }
  return nom;
}

excluirNome(nom, 1);
console.log(nom); 

excluirNome(nom, "Pedro");
console.log(nom);

// 5) Altere as funções acima para receber uma Object com três campos, os campos são: nome, email e senha.

function adicionarUsuario(usuarios, novoUsuario) {
  if (novoUsuario && typeof novoUsuario === 'object' && 'nome' in novoUsuario && 'email' in novoUsuario && 'senha' in novoUsuario) {
    usuarios.push(novoUsuario);
  } else {
    console.log("Parâmetro inválido");
  }
  return usuarios;
}

function listarUsuarios(usuarios) {
  return usuarios;
}

const usuarios = [];

adicionarUsuario(usuarios, { nome: "João", email: "joao@example.com", senha: "123456" });
adicionarUsuario(usuarios, { nome: "Maria", email: "maria@example.com", senha: "abcdef" });
adicionarUsuario(usuarios, { nome: "Pedro", email: "pedro@example.com", senha: "789012" });
adicionarUsuario(usuarios, { nome: "Ana", email: "ana@example.com", senha: "345678" });

console.log(listarUsuarios(usuarios));