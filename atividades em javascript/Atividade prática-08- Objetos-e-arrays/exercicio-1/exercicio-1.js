// 1. Crie um objeto em JavaScript para colocar dois atributos de um
//                 produto. Atribua o preço e descrição do produto com o valor “90” e a
//                 descrição com o valor “Mouse”. Mostre no console o valor dos dois
//                 atributos.
function home(){
    window.location.href = "/descricao/descricao.html";
}

function iniciar(){
    let produto = {
        preço: "R$ 90.00",
        descrição: "Mouse"
    }
    console.log(produto.descrição);
    console.log(produto.preço);
    document.getElementById("resultado").innerHTML= "Abra seu console utilizando a tecla F12";
}