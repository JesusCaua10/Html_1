function maiorAltura(){
    let alt1 = document.getElementById("altura1").value
    document.getElementById("maior1").innerHTML = alt1
    let alt2 = document.getElementById("altura2").value
    document.getElementById("maior2").innerHTML = alt2
    let alt3 = document.getElementById("altura3").value
    document.getElementById("maior3").innerHTML = alt3
    let alt4 = document.getElementById("altura4").value
    document.getElementById("maior4").innerHTML = alt4
    let alt5 = document.getElementById("altura5").value
    document.getElementById("maior5").innerHTML = alt5
    let i=1
    while(i<2){
        if(alt1>alt2 && alt1>alt3 && alt1>alt4 && alt1>alt5)
            document.getElementById("Maior").innerHTML = alt1  + " é a maior altura"

        else if(alt2>alt1 && alt2>alt3 && alt2>alt4 && alt2>alt5)
            document.getElementById("Maior").innerHTML = alt2  + " é a maior altura"
        
        else if(alt3>alt1 && alt3>alt2 && alt3>alt4 && alt3>alt5)
            document.getElementById("Maior").innerHTML = alt3 + " é a maior altura"
             
        else if(alt4>alt1 && alt4>alt2 && alt4>alt3 && alt4>alt5)
            document.getElementById("Maior").innerHTML = alt4  + " é a maior altura"
            
        else if(alt5>alt1 && alt5>alt2 && alt5>alt3 && alt5>alt4)
            document.getElementById("Maior").innerHTML = alt5  + " é a maior altura"

        i++        
        }
    let u=1
    while(u<2){
        if(alt1<alt2 && alt1<alt3 && alt1<alt4 && alt1<alt5)
            document.getElementById("Menor").innerHTML = alt1  + " é a menor altura"
        
        else if(alt2<alt1 && alt2<alt3 && alt2<alt4 && alt2<alt5)
            document.getElementById("Menor").innerHTML = alt2  + " é a menor altura"
        
        else if(alt3<alt1 && alt3<alt2 && alt3<alt4 && alt3<alt5)
            document.getElementById("Menor").innerHTML = alt3 + " é a menor altura"
             
        else if(alt4<alt1 && alt4<alt2 && alt4<alt3 && alt4<alt5)
            document.getElementById("Menor").innerHTML = alt4  + " é a menor altura"
            
        else if(alt5<alt1 && alt5<alt2 && alt5<alt3 && alt5<alt4)
            document.getElementById("Menor").innerHTML = alt5  + " é a menor altura"

        u++        
        }
}
