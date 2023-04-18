// 3. Utilizar os métodos push, pop, unshift e shift para manipular um array <br>
//                 a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
//                 de sua escolha <br>
//                 b. Utilize o método push para adicionar uma fruta no final do
//                 array <br>
//                 c. Utilize o método pop para remover a última fruta do array <br>
//                 d. Utilize o método unshift para adicionar uma fruta no início do
//                 array <br>
//                 e. Utilize o método shift para remover a primeira fruta do array <br>
//                 f. Exiba o array resultante na tela 

function iniciar(){
    // a. Crie um array com o nome "frutas" e adicione 3 tipos de fruta de sua escolha
    let frutas = ["banana","maça","abacate"];
    let resultado = ""

    // b. Utilize o método push para adicionar uma fruta no final do array 
    frutas.push("manga");
    console.log(frutas);

    // c. Utilize o método pop para remover a última fruta do array 
    frutas.pop();
    console.log(frutas);

    // d. Utilize o método unshift para adicionar uma fruta no início do array
    frutas.unshift("melão");
    console.log(frutas);

    //e. Utilize o método shift para remover a primeira fruta do array
    frutas.shift();
    console.log(frutas);

    //f. Exiba o array resultante na tela 
    for(exibindoFrutas of frutas){
        resultado += exibindoFrutas + " ,";
        console.log(resultado);
    }
    document.getElementById("resultado").innerHTML= resultado;
}