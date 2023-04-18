// //17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.
function iniciar(){
    let totalEleitores = parseInt(prompt("Digite o número total de eleitores: "));
    let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
    let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
    let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));
    let resultado = "";

    let somaVotos = votosBrancos + votosNulos + votosValidos;
    
    if (somaVotos > totalEleitores) {
        resultado = "Erro: a soma dos votos é maior que o número total de eleitores.";
    } else{
        let porcentVotosBrancos = (votosBrancos / totalEleitores) * 100;
        let porcentVotosNulos = (votosNulos / totalEleitores) * 100;
        let porcentVotosValidos = (votosValidos / totalEleitores) * 100;

        resultado = `Percentual de votos brancos: ${porcentVotosBrancos.toFixed(2)} % <br>
                     Percentual de votos nulos: ${porcentVotosNulos.toFixed(2)} % <br>
                     Percentual de votos válidos: ${porcentVotosValidos.toFixed(2)} %`;
    }
    console.log(somaVotos);
    document.getElementById("resultado").innerHTML= resultado;
}