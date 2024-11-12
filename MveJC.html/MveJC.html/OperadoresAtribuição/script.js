function funcao(){
    let x = document.getElementById("n").value
    let y
    let i = 1
    while(i<5){
        if(i===1){
            y=x
            console.log(x+=x)
            x=y
        }
        if(i===2){
            y=x
            console.log(x-=x)
            x=y
        }
        if(i===3){
            y=x
            console.log(x*=x)        
        x=y
        }
        if(i===4){
            y=x
            console.log(x/=x)
            x=y
        }
        i++
        }
    }