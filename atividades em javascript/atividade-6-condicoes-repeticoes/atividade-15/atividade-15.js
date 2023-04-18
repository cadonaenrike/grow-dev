
function iniciar(){
    let a = parseFloat(prompt("Digite o valor do lado A: "));
    let b = parseFloat(prompt("Digite o valor do lado B: "));
    let c = parseFloat(prompt("Digite o valor do lado C: "));
    let resultado = ""
    if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        resultado = "Triângulo equilátero";
    } else if (a === b || a === c || b === c) {
        resultado = "Triângulo isósceles";
    } else {
        resultado = "Triângulo escaleno";
    }
    } else {
    resultado = "Os valores fornecidos não formam um triângulo";
    }
    document.getElementById("resultado").innerHTML = resultado
}