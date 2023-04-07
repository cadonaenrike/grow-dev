const nota1 = prompt("Digite nota 1");
const nota2 = prompt("Digite nota 2");
const nota3 = prompt("Digite nota 3");

const peso1 = 2;
const peso2 = 3;
const peso3 = 5;

const notaP1 = nota1 * peso1;
const notaP2 = nota2 * peso2;
const notaP3 = nota3 * peso3;

const somaNotas = notaP1 + notaP2 + notaP3;
const div10 = somaNotas / 10;

if (div10 >= 7) {
    alert("Parabens voce foi aprovado")
}
else{
    alert("Desculpe voce foi reprovado")
}