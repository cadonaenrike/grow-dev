/*
11. Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;
*/


let numero = Number(parseInt(prompt("Adicione um numero!")));

if (numero % 2 === 0) {
  document.write("Número é par!");
} else{
    document.write("Número é ímpar!");
};
