/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
*/
function converter(){
    let celsius = document.getElementById("celsius").value;

    celsius = parseFloat(celsius);

    let farinigth = celsius * 1.8 + 32;

    document.getElementById("resultado").innerHTML = "Temperatura em fahrenheit " + farinigth + "°";

}
