function primo(a){
   let numero = a;
   let divisores = 0;
   for (cont=1; cont<=numero; cont++){
    if (numero % cont == 0) {
        divisores++
   }
    if (divisores == 2){
        console.log(a + " é um numero primo")
    } else {
        console.log(a + " não é um número primo")
    }
}
}
console.log(primo(10))