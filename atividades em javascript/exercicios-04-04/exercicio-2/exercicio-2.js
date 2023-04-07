function dia() {

   let numero = document.getElementById("numeroSema").value;
    numero = parseInt(numero);
   
   switch (numero){
    case 1:
        document.getElementById("resultado").innerHTML = "Hoje e Segunda-Feira";
    break;
    case 2:
        document.getElementById("resultado").innerHTML = "Hoje e Terça-Feira";
    break;
    case 3:
        document.getElementById("resultado").innerHTML = "Hoje e Quarta-Feira";
    break;
    case 4:
        document.getElementById("resultado").innerHTML = "Hoje e Quinta-Feira";
    break;
    case 5:
        document.getElementById("resultado").innerHTML = "Hoje e Sexta-Feira UHUUUU 🎉🎉";
    break;
    case 6:
        document.getElementById("resultado").innerHTML = "Hoje e Sabado";
    break;
    case 7:
        document.getElementById("resultado").innerHTML = "Hoje e Domingo";
    break;
    default: 
        document.getElementById("resultado").innerHTML = "Digite um valor valido de 1 a 7";
   }
};