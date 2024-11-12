let texto = "pessi";
let soma = 0;
for(i=0; i<texto.length ;i++){
    if(texto[i].toUpperCase == "A"||texto[i].toUpperCase =="E"||texto[i].toUpperCase =="I"||texto[i].toUpperCase =="O"||texto[i].toUpperCase =="U") {
        soma++;
        }
}
console.log("a quantidade de vogais é " + soma);