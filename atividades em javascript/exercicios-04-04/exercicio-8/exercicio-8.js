

function somar(){
    let idade = parseInt(document.getElementById("idade").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (idade <= 12) {
        document.getElementById("resultado").innerHTML ="Sua Categoria é: Infantil";
    } else if (idade <= 16) {
    if (peso <= 40) {
        document.getElementById("resultado").innerHTML ="Sua Categoria é: Juvenil leve";
    } else {
        document.getElementById("resultado").innerHTML ="Sua Categoria é: Juvenil pesado";
    }
    } else if (idade <= 24) {
    if (peso <= 45) {
        document.getElementById("resultado").innerHTML ="Sua Categoria é: Sênior leve";
    } else if (peso <= 60) {
        document.getElementById("resultado").innerHTML ="Sua Categoria é: Sênior médio";
    } else {
        document.getElementById("resultado").innerHTML ="Sua Categoria é: Sênior pesado";
    }
    } else {
        document.getElementById("resultado").innerHTML ="Sua Categoria é: Veterano";
    }}
