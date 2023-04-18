/*
5. Faça um algoritmo que pergunte a distância que um passageiro
                deseja percorrer em Km. Calcule o preço da passagem, cobrando
                R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
                longas.
*/
function iniciar(){
    const distancia = prompt("Digite a distancia que quer percorrer em KM :");
    let passagem;
    if (distancia >= 200) {
     passagem = distancia * 0.50;

    } else {
        passagem = distancia * 0.45
    }

document.getElementById("resultado").innerHTML= (`O cliente vai percorrer ${distancia} km <br> O preço da passagem do cliente custara: R$${passagem.toFixed(2)}`);
}