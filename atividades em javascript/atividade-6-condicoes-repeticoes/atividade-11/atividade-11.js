//                  11. Utilizando Switch, faça um programa que pergunte em que turno
//                 você estuda. Peça para digitar “M” para matutino ou “V” para
//                 vespertino ou “N” para noturno. Mostre um alerta com a mensagem
//                 “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
//                 conforme o caso.
function iniciar(){
    const turno = String(prompt("Qual turno voce estuda? Digite M para matutino. Digite V para vespertino. Digite N para noturno.").toUpperCase());

    switch(turno){
        case "M":
            document.getElementById("resultado").innerHTML= "Bom dia!"
            break
        case "V":
            document.getElementById("resultado").innerHTML= "Boa tarde!"
            break
        case "N":
            document.getElementById("resultado").innerHTML= "Boa noite!"
            break
        default:
            document.getElementById("resultado").innerHTML= "Valor inválido"    
    }
}