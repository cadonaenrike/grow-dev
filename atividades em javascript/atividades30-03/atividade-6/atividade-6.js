/*
6. Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis.
*/
let valorA = 10;
let valorB = 20;
document.write("Valor de A: " + valorA + "<br>");
document.write("Valor de B: " + valorB + "<br>");
document.write("<br>");

let muda = valorA;
		valorA = valorB;
		valorB = muda;

		document.write("Valor de A: " + valorA + "<br>");
		document.write("Valor de B: " + valorB) + "<br>";
