let usuario = document.getElementById("inpUsuario")
let senha = document.getElementById("inpSenha")
usuario.focus()


function efetuarLogin(){
    console.log(usuario.value);
    console.log(senha.value);
    if(usuario.value == "Giovanna" && senha.value == "hehedeu"){
        alert("Seja bem-vindo(a)!")
    } else{
        alert("Nome de usuário ou senha incorretos")
    }
    usuario.value = ""
    senha.value = ""
    // limpa campo
    usuario.focus()
}
