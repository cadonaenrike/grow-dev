// 2. Criar um array e percorrê-lo utilizando o loop for of <br>
//                 a. Crie um array com o nome "numeros" e adicione 5 números de
//                 sua escolha <br>
//                 b. Utilize o loop for of para percorrer o array e exibir a soma dos
//                 números na tela

function iniciar(){
    let numeros = [15,855,145,557,8];
    let soma = 0;
    let vetor = "";

    for(somaNumeros of numeros){
        vetor = vetor + somaNumeros + ",";
        soma = soma + somaNumeros;
    }

    document.getElementById("resultado").innerHTML= "Os vetores são: " + vetor + "<br> A soma dos vetors é: " + soma;
}