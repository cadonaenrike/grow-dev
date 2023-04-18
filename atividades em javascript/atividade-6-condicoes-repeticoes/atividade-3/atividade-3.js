function iniciar(){
    const dia = Number(prompt("Adicione um numero de 1 a 7"));
    let resultado = "";
    if(dia === 1){
        resultado = "Hoje e Domingo!" 
    }else if(dia === 2){
        resultado = "Hoje e Segunda!" 
    }else if(dia === 3){
        resultado = "Hoje e Terça-Feira!" 
    }else if(dia === 4){
        resultado = "Hoje e Quarta-Feira" 
    }else if(dia === 5){
        resultado = "Hoje e Quinta-Feira!" 
    }else if(dia === 6){
        resultado = "Hoje e Sexta-Feira 🎉🎶"
    }else if(dia === 7){
        resultado = "Hoje e Sabado!" 
    }else{
        resultado = "Digite um numero valido !!"
    }
    document.getElementById("resultado").innerHTML = resultado;
}