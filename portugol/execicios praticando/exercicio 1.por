programa
{
	
	funcao inicio()
	{
		real valor1,valor2

		escreva("digite o primeiro numero: ")
		leia(valor1)

		escreva("digite o segundo numero: ")
		leia(valor2)

		se(valor1 == valor2){
			escreva("Numeros iguais")
		}senao se(valor1 > valor2){
			escreva("primeiro e maior: ")
		}
		se(valor1 < valor2){
			escreva("O segundo e maior")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 44; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */