function iniciar(){
    const largura = Number(prompt("Digite a largura do terreno"));
    const comprimento = Number(prompt("Digite o comprimento do terreno"));
    const area = largura*comprimento;
    let resultado = "";
    
    if(area < 100){
        resultado= "TERRENO POPULAR"
    }else if(area < 500){
        resultado= "TERRENO MASTER"
    }else{
        resultado= "TERRENO VIP"
    }
    document.getElementById("resultado").innerHTML = resultado
}