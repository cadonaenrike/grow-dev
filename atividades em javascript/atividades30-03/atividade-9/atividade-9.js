/*
9. As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/
let quantidadeM = Number(parseInt(prompt("Quantas maçãs voce deseja?")));
let valor1ma = 0.30;
let valor2ma = 0.25;
let somaB 

if(quantidadeM >= 12){
    somaB = quantidadeM * valor2ma 
    document.write(`O valor total vai ser R$ ${somaB.toFixed(2)} <br> Custando R$ ${valor2ma.toFixed(2)} cada unidade.`).
    break
}
if(quantidadeM < 12){
    somaB = quantidadeM * valor1ma 
    document.write(`O valor total vai ser R$ ${somaB.toFixed(2)} <br> Custando R$ ${valor1ma.toFixed(2)} cada unidade.`);
}if(quantidadeM != Number ){
    document.write(`Adicione um valor valido!`);
}