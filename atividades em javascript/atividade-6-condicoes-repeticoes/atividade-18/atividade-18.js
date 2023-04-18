// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
//                 modalidades de pagamento para a venda de suas mercadorias: <br>
//                 A vista = desconto de 2.5 % sobre a tabela; <br>
//                 De 2 até 5 vezes = desconto de tabela sem desconto ou acréscimo; <br>
//                 De 6 até 10 vezes = Juros de 6 % sobre o preço de tabela; <br>
//                 De 11 até 15 vezes = Juros de 13 % sobre o preço de tabela; <br>
                
//                 Escreva um algoritmo que armazene o preço de tabela e o número
//                 de vezes em que o pagamento será feito. <br> Calcule o valor de cada
//                 parcela e o preço total da compra e imprima no console.

function iniciar(){
    const precoTabela = Number(prompt("adicione o valor de tabela do produto"));
    let quantidadeParcelas = Number(parseInt(prompt("Adicione a quantidade de Parcelas *Se for avista digite 1")));
    let juros;
    let valorFinal;
    let resultadoTela= ""

    if(quantidadeParcelas === 1){
        juros = 0.025;
        valorFinal = precoTabela - (precoTabela * juros)
        resultadoTela = `Valor da compra R$ ${precoTabela.toFixed(2)} <br>
                         Desconto de ${juros * 100} % <br>
                         Valor Final: R$ ${valorFinal.toFixed(2)}`
    }//De 2 até 5 vezes = desconto de tabela sem desconto ou acréscimo; <br>
    else if(quantidadeParcelas >= 2 && quantidadeParcelas <= 5){
        juros = 0.00;
        valorFinal = precoTabela - (precoTabela * juros)
        resultadoTela = `Valor da compra R$ ${precoTabela.toFixed(2)} <br>
                         Desconto de ${juros * 100} % <br>
                         Valor Final: R$ ${valorFinal.toFixed(2)}`
    }//De 6 até 10 vezes = Juros de 6 % sobre o preço de tabela; <br></br>
    else if(quantidadeParcelas >= 6 && quantidadeParcelas <= 10 ){
        juros = 0.06;
        valorFinal = precoTabela + (precoTabela * juros)
        resultadoTela = `Valor da compra R$ ${precoTabela.toFixed(2)} <br>
                         Acrescimo de ${juros * 100} % <br>
                         Valor Final: R$ ${valorFinal.toFixed(2)}`
    }//De 11 até 15 vezes = Juros de 13 % sobre o preço de tabela; <br>
    else if (quantidadeParcelas >= 11 && quantidadeParcelas <= 15){
        juros = 0.13;
        valorFinal = precoTabela + (precoTabela * juros)
        resultadoTela = `Valor da compra R$ ${precoTabela.toFixed(2)} <br>
                         Acrescimo de ${juros * 100} % <br>
                         Valor Final: R$ ${valorFinal.toFixed(2)}`
    }else{
        resultadoTela = `Digite um valor valido! <br>
                        *Limite de 15 parcelas no maximo `
    };
    console.log(quantidadeParcelas);
    console.log(juros);
    console.log(resultadoTela);
    document.getElementById("resultado").innerHTML= resultadoTela;


}