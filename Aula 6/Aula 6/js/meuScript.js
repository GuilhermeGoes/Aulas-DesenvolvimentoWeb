function calcular(a,b){

    var x = document.getElementById('n1').nodeValue;
    var y = document.getElementById('n2').nodeValue;

    document.getElementById('soma').innerHTML= Number(x)+Number(y);
    document.getElementById('multiplicar').innerHTML= x*y;
}