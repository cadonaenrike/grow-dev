function iniciar(){
    const idade = Number(prompt("Digite sua idade:"));
    let resultado = "";

    if(idade >=18){
        resultado= "PODE DIRIGIR";
    }else{
        resultado = "NÃO PODE DIRRIGIR";
    }
    console.log(resultado);
    document.getElementById("resultado").innerHTML = "Abra seu console!"
}