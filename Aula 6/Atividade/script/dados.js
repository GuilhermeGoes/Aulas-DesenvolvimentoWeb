function visualizardados() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var nasc = document.getElementById('nasc').value;
    console.log(nome);
    console.log(email);
    console.log(nasc);
    
    document.getElementById('mostra_nome').innerHTML= nome;
    document.getElementById('mostra_email').innerHTML= email;
    document.getElementById('mostra_nasc').innerHTML= nasc;
}