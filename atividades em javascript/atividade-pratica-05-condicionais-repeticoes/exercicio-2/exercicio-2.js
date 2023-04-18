function iniciar(){ // inicio com valores zerados
    let salarioHomens = 0;
    let salarioMulheres = 0;
    let continuar = true;

while (continuar) {// entra em modo looping
  const salario = parseFloat(prompt("Informe o salário do funcionário:"));//armazena as infos
  const sexo = prompt("Informe o sexo do funcionário (M ou F):");

  if (sexo.toUpperCase() === "M") {//se for homen ele acresenta os valor ao salarioHomens
    salarioHomens += salario;
  } else if (sexo.toUpperCase() === "F") {
    salarioMulheres += salario;
  }

  continuar = prompt("Deseja continuar? (S/N)").toUpperCase() === "S";// ele valida pra ver se vai quebrar o looping
}
document.getElementById("resultado").innerHTML =`Total de salários pagos aos homens: R$ ${salarioHomens.toFixed(2)} <br> Total de salários pagos às mulheres: R$ ${salarioMulheres.toFixed(2)}`;
}

