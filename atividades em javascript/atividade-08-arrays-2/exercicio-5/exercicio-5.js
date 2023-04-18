// 5. Crie uma função que recebe um vetor de inteiros e um número
//                 inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
//                 se não faz parte.


function iniciar() {
  let vetorInteiros = [0,1,2,3,4,5];
  let vetorInteiroVerificar = Number(parseInt(prompt("Digite um numero inteiro!")));
  
  for(verificaVetor of vetorInteiros){
    if(verificaVetor === vetorInteiroVerificar){
        document.getElementById("resultado").innerHTML = "O numero: " + verificaVetor + " esta no vetor";
    }else{
        document.getElementById("resultado").innerHTML = "O numero: " + vetorInteiroVerificar + " Não esta no vetor"
    }
  }
}