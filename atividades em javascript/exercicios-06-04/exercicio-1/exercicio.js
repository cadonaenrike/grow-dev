
var menorAltura = 9999; // o maior pra baixa
var maiorAltura = 0; //uso reverso a menor 
var contadorPessoa1;
for (let contadorPessoa = 1; contadorPessoa <= 15; contadorPessoa++) { //ele conta
  let altura = parseFloat(prompt(`Digite a altura da pessoa ${contadorPessoa}:`));
   contadorPessoa1 = contadorPessoa
  if (altura < menorAltura) {
    menorAltura = altura;
  }
  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
}


document.getElementById("resultado").innerHTML= (
  `O grupo e composto por ${contadorPessoa1} Pessoas <br> 
  A menor altura do grupo é ${menorAltura.toFixed(2)} metros.<br>
  A maior altura do grupo é ${maiorAltura.toFixed(2)} metros.`);

