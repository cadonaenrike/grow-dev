// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
//                 e se está trabalhando ou não, se a pessoa estiver trabalhando
//                 pergunte para ele o salário que está ganhando. <br>
//                 Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar
//                 cadastrando ou não. <br>
//                 No final, mostre as pessoas que estão desempregadas. <br>
//                  as pessoas que estão empregadas separadas pelas que ganham mais que 2500 e menos que 2500. <br>

//                 Exemplo de resultado: <br>
//                 Pessoas desempregadas: <br>
//                 Nome: Alessandro, Idade: 28 <br>
//                 Nome: Alessandro, Idade: 28 <br>

//                 Pessoas empregadas com salários menores que 2500: <br>
//                 Nome: Alessandro, Idade: 28, Salário: 1500 <br>
//                 Nome: Alessandro, Idade: 28, Salário: 2400 <br>

//                 Pessoas empregadas com salários maiores que 2500: <br>
//                 Nome: Alessandro, Idade: 28, Salário: 2700 <br>
//                 Nome: Alessandro, Idade: 28, Salário: 3000 
function home(){
    window.location.href = "/descricao/descricao.html";
 };

function iniciar(){
   let pessoas = []; // criei um array para armazenar os objetos

    while(true){ //criei um laço de repetiçao pra repetir a inçersão de dados
        
        const nomeCadastrado = prompt("Digite o nome da pessoa");
        const idade = parseInt(prompt("Digite a idade da pessoa"));
        const trabalhando = prompt("Esta trabalhando? digite sim ou nao ").toLowerCase();

        let salario;
            console.log(trabalhando);
        //valido se esta trabalhando     
        if(trabalhando === "sim"){
            salario = parseFloat(prompt("Digite seu salario"));
        }

        let listaNomes = { // crio um objeto padra com os dados inseridos
            nomeCadastrado,
            idade,
            trabalhando,
            salario
        };

        pessoas.push(listaNomes); //adiciono ao array os objetos
        console.log(pessoas)

        const continuar = prompt("Deseja continuar cadastrando? Digite sim ou nao").toLowerCase();

        if(continuar === "nao"){ // valido o final dos laço de repetição
            break;
        };
    }
    // crio arrays pra adicionar os dados de cada dados pedidos
        let desempregados = [];
        let maiorQue2500 = [];
        let menorQue2500 = [];

        for(let i = 0; i < pessoas.length; i++){ // utliza o for pra percorer o array de objetos
            const pessoa = pessoas[i];

            if(pessoa.trabalhando === "nao"){ //condiçoes que capturam os dados pedidos
                desempregados.push(pessoa)
            }else if(pessoa.salario > 2500){
                maiorQue2500.push(pessoa)
            }else{
                menorQue2500.push(pessoa)
            }
        }
        // percorre o array dos daos pedidos e apresenta os objetos do array

        for(let i = 0; i < desempregados.length; i++){ 
            const pessoaDesempregadas = desempregados[i];

            document.getElementById("resultado1").innerHTML= `Pessoas desempregadas: <br> Nome: ${pessoaDesempregadas.nomeCadastrado}, Idade: ${pessoaDesempregadas.idade}`
        }

        for(i = 0; i < menorQue2500.length; i++){
            const pessoaMenorQue2500 = menorQue2500[i];

            document.getElementById("resultado2").innerHTML=`Pessoas empregadas com salários menores que 2500: <br> Nome: ${pessoaMenorQue2500.nomeCadastrado}, Idade: ${pessoaMenorQue2500.idade} Salario: ${pessoaMenorQue2500.salario}`;
        }

        for(let i = 0; i < maiorQue2500.length; i++){
            const pessoaMaisQue2500 = maiorQue2500[i];

            document.getElementById("resultado3").innerHTML=`Pessoas empregadas com salários maiores que 2500: <br> Nome: ${pessoaMaisQue2500.nomeCadastrado}, Idade: ${pessoaMaisQue2500.idade} Salario: ${pessoaMaisQue2500.salario}`;
        }
}