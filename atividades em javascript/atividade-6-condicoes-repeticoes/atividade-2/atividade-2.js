function iniciar(){
    const idade = Number(prompt("Digite sua idade:"));
    const carteira = prompt("Voce possui Carteira de habilitação S para sim e N para não").toUpperCase();

    let resultado = "";

    if(idade >= 18 && carteira === "S"){
        resultado= "PODE DIRIGIR";
    }else{
        resultado = "NÃO PODE DIRRIGIR";
    }
   
    document.getElementById("resultado").innerHTML = resultado
}