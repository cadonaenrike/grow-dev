// 4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
//                 retorne a união dos dois em um novo vetor.
function uniaoVetores(vetor1,vetor2) {
    //criei um novo vetor
    let uniao = [];
    //esse for percore e adiciona os dados do vetor1
    for(let i = 0; i < vetor1.length; i++) {
        uniao.push(vetor1[i]);
      }
    
  
    //esse for percore e adiciona os dados do vetor2
    for(let i = 0; i < vetor2.length; i++) {
        uniao.push(vetor2[i]);
      }
  
    return uniao;
  }
function iniciar(){ 
      let vetores1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let vetores2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    // chama a função criada para unir os vetor
      let uniao =  uniaoVetores(vetores1,vetores2);
      console.log(uniao);
      document.getElementById("resultado").innerHTML = uniao
}
// esse codigo tem um erro ele nao apresenta duas vezes os mesmos valores dos vetores ex: se tiver o 6 no vetor1  e se tiver o 6 no vetor2  ele nao repete !!
