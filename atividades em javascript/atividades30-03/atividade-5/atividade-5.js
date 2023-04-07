/*
Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"
*/

const nomeAluno = prompt("Adicione o Nome do aluno");
const nota1 = Number(prompt("Adicione a primeira nota!(De 0 a 10)"));
const nota2 = Number(prompt("Adicione a segunda nota!(De 0 a 10)"));
const nota3 = Number(prompt("Adicione a terceira nota!(De 0 a 10)"));
const media = nota1 + nota2 + nota3 / 3
document.write(`O aluno ${nomeAluno} ficou com média de ${media.toFixed(2)}`)