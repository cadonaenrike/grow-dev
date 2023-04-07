
function contar() {
  let resultado = "";
  for (let i =parseInt(document.getElementById("valor").value); i >= 1; i--) {//valida a contagem
    let primo = true;

    for (let conferePri = 2; conferePri <= Math.sqrt(i); conferePri++) {// confere se nao é primo
      if (i % conferePri === 0) {
        primo = false;
        break;
      }
    }
    if (primo) {//acresenta para apresentar
      resultado += "[" + i + "] ";
    } else {
      resultado += i + " ";
    }
  }
  document.getElementById("resultado").innerHTML = resultado;
}
