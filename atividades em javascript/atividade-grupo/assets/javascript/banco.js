function calcularNotas() {
  let valorDesejado = parseInt(document.getElementById("valor-desejado").value);
  let qtdNotas50 = 0;
  let qtdNotas10 = 0;
  let qtdNotas5 = 0;
  let qtdNotas1 = 0;

  while (valorDesejado > 0) {
    if (valorDesejado >= 50 && qtdNotas50 < 5) {
      valorDesejado -= 50;
      qtdNotas50++;
    } else if (valorDesejado >= 10 && qtdNotas10 < 10) {
      valorDesejado -= 10;
      qtdNotas10++;
    } else if (valorDesejado >= 5 && qtdNotas5 < 20) {
      valorDesejado -= 5;
      qtdNotas5++;
    } else if (valorDesejado >= 1 && qtdNotas1 < 50) {
      valorDesejado -= 1;
      qtdNotas1++;
    } else {
      // Se o valorDesejado for menor do que o valor de uma nota,
      // ou se a quantidade máxima de notas para esse valor já foi atingida,
      // interrompemos o loop e exibimos uma mensagem de erro.
      document.getElementById("resultado").innerHTML = "Não é possível sacar esse valor com as notas disponíveis.";
      return;
    }
  }

  let resultado = `GC$ 50,00 -> ${qtdNotas50} <br>
                    GC$ 10,00 -> ${qtdNotas10} <br>
                    GC$ 5,00 -> ${qtdNotas5} <br>
                    GC$ 1,00 -> ${qtdNotas1} <br>`;
  document.getElementById("resultado").innerHTML = resultado;
}