function validar() {
    var name = document.getElementById("name");
    var mail = document.getElementById("mail");
    var date = document.getElementById("datanasc");

    if (!name.checkValidity()) {
        document.getElementById('mensagemName').innerHTML = name.validationMessage;
        document.getElementById('mensagemName').style.color = "red";
        document.getElementById("name").style.background = "#F78181";
        document.getElementById("name").focus();
    }

    if (!mail.checkValidity()) {

        document.getElementById("mensagemEmail").innerHTML = mail.validationMessage;
        document.getElementById("mensagemEmail").style.color = "red";
        document.getElementById("mail").style.background = "#F78181";
        document.getElementById("mail").focus();
    }

    if (!date.checkValidity()) {

        document.getElementById("mensagemData").innerHTML = date.validationMessage;
        document.getElementById("mensagemData").style.color = "red";
        document.getElementById("datanasc").style.background = "#F78181";
        document.getElementById("datanasc").focus();
    } else{
        document.getElementById('mensagemSucesso').innerHTML = "cadastrado com sucesso";
    }
}