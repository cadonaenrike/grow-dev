function imc(){

    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let resultImc = peso / (altura * altura);
    console.log(resultImc)    
    switch(true) {
        case (resultImc <= 18.5):
            document.getElementById("resultado").innerHTML ="Seu IMC é " + resultImc.toFixed(2) +  " Você está abaixo da faixa de peso ideal";
        break
        case(resultImc >= 24.99):
            document.getElementById("resultado").innerHTML ="Seu IMC é " + resultImc.toFixed(2) +  " Você está acima da faixa de peso ideal";
        break
        default:
            document.getElementById("resultado").innerHTML = "Seu IMC é " + resultImc.toFixed(2) + " Você está Dentro da faixa de peso ideal";
    };
}