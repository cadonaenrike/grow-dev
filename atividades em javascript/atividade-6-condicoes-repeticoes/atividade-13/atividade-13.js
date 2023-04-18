// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.
function iniciar(){
    const valor = Number(prompt("Digite um numero"));
    let resultado = ""
    for(i = 1; i <= valor; i++ ){
        if(i % 2 === 1){
            resultado = document.write("<p>"+ i +"</p>")
            console.log(i)
        }else{
            resultado= "Digite um valor valido"
        } 
    }
    document.getElementById("resultado").innerHTML= `Os valores Impares ate: ${valor} são: <br> ${resultado}`
}
