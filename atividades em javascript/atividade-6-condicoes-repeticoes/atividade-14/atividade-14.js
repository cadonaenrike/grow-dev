// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

function iniciar() {
    let numero = Number(prompt("Digite um número"));
    while (numero * 3 < 500) {
        numero = numero * 3;
        console.log(numero);
    }; 

    document.getElementById("resultado").innerHTML = `O último valor múltiplo de 3 e menor que 500 é: ${numero}`;
}
