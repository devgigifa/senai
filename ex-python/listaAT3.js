// Lista de Atividades 3 - Professor Dennis

// 1. Crie um arquivo HTML que possui um form ao usuário preencher. Ao ser preenchido deve ser salvo os dados nome, email e senha dentro da lista.

// 2. Os dados obtidos devem ser apresentados no arquivo HTML dentro de uma tag <ul>

// 3. A cada item deve apresentar nome e email.

// 4. Ao lado do item deve possuir dois botões que ao ser clicado deve excluir ou atualizar os dados. 

let usuarios = [];

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    usuarios.push(usuario);

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";

    atualizarLista();
});

function atualizarLista() {
    let listaUsuarios = document.getElementById("lista-usuarios");
    listaUsuarios.innerHTML = "";

    usuarios.forEach(function(usuario, index) {
        let li = document.createElement("li");
        li.textContent = `${usuario.nome} - ${usuario.email}`;

        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.className = "botao-excluir";
        botaoExcluir.addEventListener("click", function() {
            usuarios.splice(index, 1);
            atualizarLista();
        });

        let botaoAtualizar = document.createElement("button");
        botaoAtualizar.textContent = "Atualizar";
        botaoAtualizar.className = "botao-atualizar";
        botaoAtualizar.addEventListener("click", function() {
            // Implementar lógica para atualizar os dados do usuário
            console.log("Atualizar usuário", usuario);
        });

        li.appendChild(botaoExcluir);
        li.appendChild(botaoAtualizar);

        listaUsuarios.appendChild(li);
    });
}