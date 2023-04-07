function calcular() {
  let soma = 0;
  let positivos = 0;
  let negativos = 0;

  for (let i = 1; i <= 10; i++) {  //acresenta os numeros e troca pelo soma
    let numero = Number(prompt("Digite o " + i + "º número:"));
    soma += numero;

    if (numero > 0) {  //pega o que adicionou no numero e separa positivos e negativos
      positivos++;
    } else if (numero < 0) {
      negativos++;
    }
  }

  let media = soma / 10;
  let percPositivos = (positivos / 10) * 100;
  let percNegativos = (negativos / 10) * 100;

  let resultado = "Média: " + media.toFixed(2) + "<br>";
  resultado += "Quantidade de valores positivos: " + positivos + "<br>";
  resultado += "Quantidade de valores negativos: " + negativos + "<br>";
  resultado += "Percentual de valores positivos: " + percPositivos.toFixed(2) + "%<br>";
  resultado += "Percentual de valores negativos: " + percNegativos.toFixed(2) + "%";

  document.getElementById("resultado").innerHTML = resultado;
}
