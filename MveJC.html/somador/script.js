let numero = " "
function At(){
    numero = document.getElementById("num").value;
    document.getElementById("Num1").innerHTML = numero
}
while (numero =! 0){
   let x = numero
   let somar = x + numero
   document.getElementById("Soma1").innerHTML = somar
}