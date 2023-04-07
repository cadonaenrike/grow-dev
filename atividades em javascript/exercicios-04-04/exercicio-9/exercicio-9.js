function multa(){
    let velocidade = Number(document.getElementById("velocidade").value);
    if(velocidade <= 80){
        document.getElementById("resultado").innerHTML = "Velocidade não cabivel de Multa";
    }else{
        let valorPkmh = (velocidade - 80) * 5;
        let valorMulta = valorPkmh + 80;
        document.getElementById("resultado").innerHTML = "Voce foi Multado ! <br>" + "Custou R$"+valorPkmh.toFixed(2) + "<br>O valor da multa ficara em: R$"+ valorMulta.toFixed(2);
    }
}