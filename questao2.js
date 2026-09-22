function EhPar(){
    let num =Number(prompt("digite um numero"))
    let v= num%2
    if(num%2==0){
        return v == v
    }
    else {
        return v !== v
    }
}

alert(EhPar())