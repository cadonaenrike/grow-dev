function custoFinal(){
    let custoFabrica = Number(document.getElementById("custoFab").value);
     custoFabrica = parseFloat(custoFabrica);

    const percentDistribuidor = 0.28;
    const percentImpostos = 0.45;

    let custoFinal = custoFabrica + (custoFabrica * percentDistribuidor) + (custoFabrica * percentImpostos);

    document.getElementById("resultado").innerHTML = "O custo final do carro ao consumidor é de R$ " + custoFinal.toFixed(2);
}