function iniciar(){
    const dia = Number(prompt("Adicione um numero de 1 a 7"));
    let resultado = "";
    switch(dia){
        case 1: 
            resultado = "Hoje e Domingo!" 
            break;
        case 2:
            resultado = "Hoje e Segunda!" 
            break;
        case 3:
            resultado = "Hoje e Terça-Feira!"
            break;
        case 4:
            resultado = "Hoje e Quarta-Feira"
            break;
        case 5:
            resultado = "Hoje e Quinta-Feira!" 
            break;
        case 6:
            resultado = "Hoje e Sexta-Feira 🎉🎶"
            break;
        case 7:
            resultado = "Hoje e Sabado!" 
            break;
        default: 
            resultado = "Digite um numero valido !!"         
    }
    document.getElementById("resultado").innerHTML = resultado;
}