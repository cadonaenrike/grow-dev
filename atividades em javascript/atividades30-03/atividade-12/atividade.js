/*
12. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/
let anoAtual = new Date().getFullYear();
let idade = Number(parseInt(prompt("Digite seu ano de nascimento!")));
let soma = new Date().getFullYear() - idade;

if(soma >= 16){
    document.write(`No ano de ${anoAtual} <br> Voce ja pode Votar`)
}else{
    document.write(`No ano de ${anoAtual} <br> Voce ainda não pode Votar`)
}