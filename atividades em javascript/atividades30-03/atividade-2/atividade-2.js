/*
2. Crie três variáveis JavaScript, em duas delas atribua os valores que
você quiser e na outra atribua o valor da soma das duas primeiras
variáveis. Apresente valor da soma no documento html junto da
frase "A resultado da soma de x e y é z", sendo x o valor armazenado
na primeira variável, y o valor armazenado segunda variável e z o
valor armazenado na terceira variável
*/

const valor1 = Number(prompt("Digite um numeros")); 
const valor2 = Number(prompt("Digite um numeros"));
const soma = valor1 + valor2; 

document.write("O resultado da soma de " + valor1 + " + "+ valor2 + " é " + soma);