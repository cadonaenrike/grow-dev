// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7
function iniciar(){
    const altura = Number(prompt("Adicione sua altura:"));
    const sexo = Number(prompt("Adicione seu sexo: utilize seguinte forma: 1 para sexo feminino e 2 para sexo masculino"));
    let resultado

    if(sexo === 2){
        resultado = (72.7 * altura) - 58;
    }else if (sexo === 1){
        resultado = (62.1 * altura) - 44.7;
    }else{
        resultado = "Adicione um numero de sexo valido" 
    }
    document.getElementById("resultado").innerHTML= `Seu peso ideal é: ${resultado.toFixed(2)} Kg.`;
}