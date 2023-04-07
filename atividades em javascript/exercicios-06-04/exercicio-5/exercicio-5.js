function contar() {
  let valor = parseInt(document.getElementById("valor").value);
  let contadorR = "";
  for (let contador = 0; contador <= valor; contador++) {
    contadorR += contador + ", ";
  }
  document.getElementById("resultado").innerHTML = contadorR + "FIM!";
}