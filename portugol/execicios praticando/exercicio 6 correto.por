programa
{
	
	funcao inicio()
	{
		real saldo = 250.0
		real taxa = 4.50
		inteiro saque
		escreva ("informe a quantidade de dinheiro que deseja sacar: R$ ")
		leia(saque)

		se(saque <= 0 ou saque % 5 !=  0) {
			escreva ("valor do saque precisa ser um numero positivo e multiplo de 5")
		}senao se ((saque+ taxa) > saldo){
			escreva("voce nao possui saldo suficiente para esse saque")
		}senao {
			saldo = saldo - saque
			saldo -= taxa

			escreva("saque realizado com sucesso \n")
			escreva("saldo atualizado: R$ " + saldo)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 196; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */