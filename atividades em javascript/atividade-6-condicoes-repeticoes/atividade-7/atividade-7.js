function iniciar(){
    let contador = 10
    let soma = 0;
    let resultado = "";

    do{
        soma += contador
        contador++
    }while(contador <= 100);

    resultado =  soma;

    document.getElementById("resultado").innerHTML= resultado;
}