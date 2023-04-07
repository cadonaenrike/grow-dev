function taboada() {
    let valor = parseInt(document.getElementById("valor1").value);
    let valorvezes = parseInt(document.getElementById("repeti").value);
    let resultado = "";
    for (let tab = 0; tab < valorvezes; tab++) {
      let produto = valor * (tab + 1);
      resultado += `${valor} x ${tab + 1 } = ${produto}<br>`;
    }
    document.getElementById("resultado").innerHTML = resultado;
  }