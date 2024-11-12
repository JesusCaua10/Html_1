function alertpeso(){
    let Peso = document.getElementById("peso").value;
    document.getElementById("pesodigitado").innerHTML = Peso
    let Altura = document.getElementById("altura").value;
    document.getElementById("alturadigitada").innerHTML = Altura
    let Imc = Peso/(Altura*Altura)
    document.getElementById("imcdigitado").innerHTML = Imc
}