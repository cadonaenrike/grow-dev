/*
Criar um algoritmo para calcular a média de 3 notas
e no final fazer as seguintes validações:
1. Se a média ficar entre 9 e 10 deve ser mostrado
no html a mensagem: Aprovado com nota
excelente
1. Se a média ficar entre 7 e 8 (não incluso) deve ser
mostrado no html a mensagem: Aprovado com
uma nota boa
1. Se a média ficar abaixo de 7 deve ser solicitado
uma outra nota que será a nota de recuperação
*/
let nota1 = Number(prompt("Adicione a primeira nota 1:"));
let nota2 = Number(prompt("Adicione a primeira nota 2:"));
let nota3 = Number(prompt("Adicione a primeira nota 3:"));
let notaRecuperacao;
let soma = (nota1 + nota2 + nota3) / 3;

if ( soma >= 7 &&  soma <= 8 ){
    let h1 = document.createElement("h1");
    h1.textContent = "Aprovado com uma nota boa";
    document.body.appendChild(h1);
}
else if ( soma <= 10 && soma >= 9 ){
    let h1 = document.createElement("h1");
    h1.textContent = "Aprovado com uma nota Exelente";
    document.body.appendChild(h1);
}
else{
    let h1 = document.createElement("h1");
    h1.textContent = "sua media ficou abaixo da media!";
    document.body.appendChild(h1);

};