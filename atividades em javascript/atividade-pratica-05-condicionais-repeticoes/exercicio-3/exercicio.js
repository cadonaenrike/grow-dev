function somar() {
  let primeiroValor = parseInt(document.getElementById("primeiroValor").value);
  let ultimoValor = parseInt(document.getElementById("ultimoValor").value);
  let incremento = parseInt(document.getElementById("incremento").value);
  let resultado = "Contagem: ";

  for (let contador = primeiroValor; contador <= ultimoValor; contador += incremento) {
    resultado += contador + " ";
  }

  resultado += "Acabou!";
  document.getElementById("resultado").innerHTML = resultado;
}
