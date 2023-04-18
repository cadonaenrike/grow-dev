function iniciar(){
    const nome = prompt("Digite o nome do cliente:");
    const sexo = prompt("Digite o sexo do cliente (M para mulher ou H para homem):");
    const valorCompras = Number(prompt("Digite o valor das compras do cliente:"));

    let desconto;
    if (sexo === "F") {
        desconto = 0.13;
    } else {
        desconto = 0.05;
    }

const valorComDesconto = valorCompras * (1 - desconto);

document.getElementById("resultado").innerHTML= (`O preço com desconto para o cliente ${nome} é R$${valorComDesconto.toFixed(2)}`);

}