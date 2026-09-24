function calcularIMC(){
    let peso =Number(prompt("Digite o peso:"))
    let altura =number(prompt("digite a altura"))
    let imc = peso / (altura *altura)
    return imc
}
 let resultado = calcularIMC()
 if (resultado= 18.5){
    alert("abaixo peso")
 }
 if (resultado >= 18.5 && resultado <=24.9){
    alert("peso ideal")
 }
 if (resultado >= 18.5 && resultado >=25){
    alert("sobrepeso")
 }
