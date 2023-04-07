/*
8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/

const valor1 = Number(prompt("Adicione um Numero!"));
const valor2 = Number(prompt("Adicione mais um Numero!"));

if(valor1 > valor2){
    document.write(`O valor ${valor1.toFixed(2)} é maior que ${valor2.toFixed(2)} !`)
}
if(valor2 > valor1){
    document.write(`O valor ${valor2.toFixed(2)} é maior que ${valor1.toFixed(2)} !`)
}
if(valor1 == valor2){
    document.write(`O valor ${valor2.toFixed(2)} é igual o ${valor1.toFixed(2)} !`)
}else{
    document.write(`Adicione um valor valido`)
}