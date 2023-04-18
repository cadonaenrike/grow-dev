// 1. Criar um array e percorrê-lo utilizando o loop for <br>
//                 a. Crie um array com o nome "nomes" e adicione 4 nomes de
//                 pessoas que você conhece <br>
//                 b. Utilize o loop for para percorrer o array e exibir os nomes na
//                 tela

function iniciar(){
    let nomes = ["pedro","paulo","joao","maria"];

    for(contador = 0; contador <= nomes.length - 1; contador++){
        document.write(nomes[contador] + "<br>");
    }
}