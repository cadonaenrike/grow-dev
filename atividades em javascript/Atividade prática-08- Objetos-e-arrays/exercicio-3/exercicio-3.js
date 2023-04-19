// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.
function home(){
    window.location.href = "/descricao/descricao.html";
}

function iniciar(){
   // Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas para o primeiro objeto , que será nosso primeiro aluno.
    let primeiroAluno = {
        nome: "pedro",
        nota1: 8,
        nota2: 5
    }

    // Agora crie mais um objeto para colocar informações do nosso segundo aluno.
    let segundoAluno = {
        nome: "joão",
        nota1: 6,
        nota2: 8
    }

    // Mostre as informações de cada aluno no console.
    console.log("primeiro aluno");
    console.log(primeiroAluno.nome);
    console.log(primeiroAluno.nota1);
    console.log(primeiroAluno.nota2);

    console.log("segundo aluno");
    console.log(segundoAluno.nome);
    console.log(segundoAluno.nota1);
    console.log(segundoAluno.nota2);

    // Mostre também a média do primeiro aluno e a média do segundo aluno.
    let mediaPrimeiroAluno = (primeiroAluno.nota1 + primeiroAluno.nota2) / 2;
    let mediaSegundoAluno = (segundoAluno.nota1 + segundoAluno.nota2) / 2;

    console.log("a media do primeiro aluno é: " + mediaPrimeiroAluno);
    console.log("a media do segundo aluno é: "+ mediaSegundoAluno);

    //Por fim mostre a média desta turma de 2 alunos.
    let mediaTurma = (primeiroAluno.nota1 + primeiroAluno.nota2 + segundoAluno.nota1 + segundoAluno.nota2) / 4;

    console.log("A media da turma é " + mediaTurma)
    document.getElementById("resultado").innerHTML= "Abra seu console utilizando a tecla F12";
}