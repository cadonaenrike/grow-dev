programa
{
	
	funcao inicio()
	{
		real v1,v2
		real resultado=0
		caracter op
		
		escreva("escreva um primeiro numero: ")
		leia(v1)
		escreva("digite uma operações matemáticas básicas: são adição (+), subtração (-), multiplicação (*) e divisão (/) representada pelo simbolo: ")
		leia(op)
		escreva("escreva um segundo numero: ")
		leia(v2)

		escolha (op){
			caso '+':
			resultado=v1+v2
			pare
			caso '*':
			resultado=v1*v2
			pare
			caso '/':
			resultado=v1/v2
			pare
			caso '-':
			resultado=v1-v2
			pare
			}
			escreva(resultado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 515; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */