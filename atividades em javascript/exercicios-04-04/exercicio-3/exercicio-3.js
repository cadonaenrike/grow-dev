function verifica(){
    let numero = document.getElementById("numero").value;

    if (numero >= 1 ){
        document.getElementById("resultado").innerHTML = "O Numero " + numero + " é POSITIVO";
    }
    else if(numero == 0){
        document.getElementById("resultado").innerHTML = "ZERO"; 
    }
    else{
        document.getElementById("resultado").innerHTML = "O Numero " + numero + " é NEGATIVO";
    }
}