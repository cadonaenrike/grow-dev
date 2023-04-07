let valor = Number(parseInt(prompt("Digite um valor inteiro e positivo")));

 for(let tab = 0 ; tab <= 10; tab++ ){
    let resultado = valor * tab
    document.write(`${valor} x ${tab} = ${resultado}<br>`)
 };