programa
{
	funcao inicio()
	{
	real saldo=100,saque,resultado
	caracter op
	escreva ("ola o que gostaria de fazer: \n *Cada saque tem uma taxa fixa de 4.5* \n (1) pra sacar ou (2) ver saldo ")
	leia (op)
	escolha (op){
			caso '1' :
			escreva ("qual valor deseja sacar? ")
			leia (saque)
			saque = saque+ 4.5
			saldo = saldo - saque 
				
			pare 
			caso '2' :
			saldo = 100.00
			
			pare
	}se (saldo<0.00){
				escreva(" saldo insuficiente ")}
				escreva("seu saldo é ") escreva(saldo)		
	}	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 500; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */