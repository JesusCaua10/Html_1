let texto = "pessi";
let soma = 0;
for(i=0; i<texto.length ;i++){
    if(texto[i].toUpperCase == "A"||"E"||"I"||"O"||"U") {
        soma++;
        console.log(texto[i]+" "+"é vogal");
    }else{
        console.log(texto[i]+" "+"não é vogal");
    }
}
console.log(soma);