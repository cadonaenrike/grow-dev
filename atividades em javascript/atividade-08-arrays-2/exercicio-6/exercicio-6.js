// 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
//                     e que exiba a lista desses nomes na tela. <br> Após exibir essa lista, o
//                     programa deve mostrar também os nomes na ordem inversa em
//                     que o usuário os digitou. <br>

//                     Ex: <br>
//                     Entrada: Édson, Marcelo, Letícia, Ju, Thobias <br>
//                     Saída: Thobias, Ju, Letícia, Marcelo, Édson

function iniciar(){
    let nomes = [];
    let ordemdigitada;
    let resultadoFinal;

    while(nomes.length < 5){
        let nome = prompt("escreva um nome:");

        nomes.push(nome);
    }

    for(nomesOrdemCerta of nomes){
        ordemdigitada = nomesOrdemCerta
    }
    document.write(" A lista em ordem reversa é: <br>");

    for(let invertePosi = nomes.length - 1; invertePosi >= 0; invertePosi--){
        resultadoFinal = nomes[invertePosi];
        document.write(resultadoFinal + "<br>");
    }

    
}