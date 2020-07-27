function Validar() {

    var email = document.getElementById('email');
    var idade = document.getElementById('idade');

    if (!email.checkValidity()) {
        document.getElementById('mensagemErro').innerHTML = email.validationMessage;
        document.getElementById('mensagemErro').style.color = "red";
        document.getElementById('mensagemErro').style.background = "red": 
        document.getElementById('mensagemErro').focus();

    }
    
    if (!email.checkValidity()) {
        document.getElementById('mensagemErro').innerHTML = idade.validationMessage;
        document.getElementById('mensagemErro').style.color = "red";
        document.getElementById('mensagemErro').style.background = "red";
        document.getElementById('mensagemErro').focus();
    }
    else{

        document.getElementById('mensagemErro').innerHTML = "cadastrado com sucesso!";
        document.getElementById('mensagemErro').style.color = "blue";
    }
}