let idade;
let somaIdades = 0; 
let = qtdIdades = 0;
let qtdMaiores21 = 0;
let devoContinuar = true

do {
  idade = Number(parseInt(prompt("Digite a idade:")));
  somaIdades += idade;
  qtdIdades++;

  if (idade >= 21) {
    qtdMaiores21++;
  }
  let entrada = prompt("deseja adicionar mais dados S para sim ou N para não?");
 
  if(entrada == "N")
    devoContinuar = false
  else{
    devoContinuar = true
  };  
} while (devoContinuar);
    let mediaIdades = somaIdades / qtdIdades;
    
    document.write(`Quantidade de idades digitadas: ${qtdIdades} <br>
    Média das idades digitadas: ${mediaIdades.toFixed(2)} <br>
    Quantidade de pessoas com 21 anos ou mais: ${qtdMaiores21}`);