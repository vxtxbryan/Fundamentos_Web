let nome = document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = "100%";
email.style.width = "100%";
assunto.style.width = "100%";

function validaNome() {
    let valNome = document.querySelector("#valNome");
    if(nome.value.length < 3) {
        valNome.innerHTML = "Nome Inválido";
        valNome.style.color = "red";
    } else {
        valNome.innerHTML = "Nome Válido";
        valNome.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail() {
    let valEmail = document.querySelector("#valEmail");
    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        valEmail.innerHTML = "E-mail Inválido";
        valEmail.style.color = "red";
    } else {
        valEmail.innerHTML = "E-mail Válido";
        valEmail.style.color = "green";
        emailOk = true;
    }
}

function validaAssunto() {
    let valAssunto = document.querySelector("#valAssunto");
    if(assunto.value.length > 100) {
        valAssunto.innerHTML = "Texto é muito grande. Digite no máximo 100 caractéres";
        valAssunto.style.color = "red";
        valAssunto.style.display = "block";
    } else {
        valAssunto.style.display = "none";
        assuntoOk = true;
    }
}

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos devem ser preenchidos!")
        return false
    }else{
        alert("Olá " + nome.value + "! Seu feedback foi enviado com sucesso!")
        return true
    }


}