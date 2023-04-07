/*
7. Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.
*/

let totalEleitores = Number(parseInt(prompt("Digite o número total de eleitores do município:")));
let votosBrancos = Number(parseInt(prompt("Digite o número de votos brancos:")));
let votosNulos = Number(parseInt(prompt("Digite o número de votos nulos:")));
let votosValidos = Number(parseInt(prompt("Digite o número de votos válidos:")));

let percentualVotosBrancos = (votosBrancos / totalEleitores) * 100;
let percentualVotosNulos = (votosNulos / totalEleitores) * 100;
let percentualVotosValidos = (votosValidos / totalEleitores) * 100;


document.write(`Percentual de votos brancos: ${percentualVotosBrancos.toFixed(2)}% <br>`);
document.write(`Percentual de votos nulos: ${percentualVotosNulos.toFixed(2)}% <br>`);
document.write(`Percentual de votos válidos: ${percentualVotosValidos.toFixed(2)}% <br>`);

