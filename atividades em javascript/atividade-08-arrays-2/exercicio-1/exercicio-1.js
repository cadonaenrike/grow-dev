function iniciar(){
    let vetor = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let resultado ='' ;

    for(i = 0 ; i <= vetor.length; i++){

        if(vetor[i] % 2 == 0){
            console.log(vetor[i]);
            resultado += vetor[i] + ' ';
            document.getElementById("resultado").innerHTML= resultado;
        }
    }
}