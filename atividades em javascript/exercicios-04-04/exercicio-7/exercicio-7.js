let saldo = 1000.00;
document.getElementById("resultado").innerHTML = "Seu saldo atual é: R$"+ saldo; 

function sacar(){
let saque = parseInt(document.getElementById("saque").value);

if (saque <= 0 || saque % 5 != 0 || saque > saldo) {
  alert("Valor inválido de saque.");
} else {
  let taxa = 4.5; // valor da taxa de saque
  let valorTotal = saque + taxa; // valor total a ser sacado (considerando a taxa)
  
  if (valorTotal <= saldo) {
    saldo -= valorTotal; // atualiza o saldo da conta
    
    alert("Saque realizado com sucesso!");
  } else {
    alert("Saldo insuficiente para realizar o saque.");
  }
}
document.getElementById("resultado").innerHTML = "Seu saldo atual é: R$"+ saldo; 
}
