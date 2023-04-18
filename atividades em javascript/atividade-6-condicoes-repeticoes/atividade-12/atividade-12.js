// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).
function iniciar(){
    const idade = Number(prompt("Digite sua idade:"));

    if(idade >= 18 && idade <= 67){
        document.getElementById("resultado").innerHTML= "Voce pode Doar sangue! <br>" + "SALVE VIDAS DOANDO SANGUE"
    }else{
        document.getElementById("resultado").innerHTML= "Infelizmente voce não pode Doar sangue!"
    }
}