// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).
function iniciar(){
    let anoAtual = new Date().getFullYear();
    let nascimento = Number(parseInt(prompt("digite seu ano de nascimento!")));
    let somaVoto = anoAtual - nascimento;
    let resultado = "";

    if(somaVoto >= 16){
        resultado = "Pode votar no ano de " + anoAtual;
    }else{
        resultado = "Não pode votar no ano de " + anoAtual;
    }
    document.getElementById("resultado").innerHTML = resultado;
}