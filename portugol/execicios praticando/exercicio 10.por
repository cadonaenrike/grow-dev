programa
{
	
	funcao inicio()
	{
		inteiro numero
		para (numero = 1; numero <= 250; numero ++)
			se(numero % 3 == 0){
				escreva("O numero " + numero + " é multiplo de 3 \n")
			}
		senao se(numero % 5 == 0){
				escreva("O numero " + numero + " é multiplo de 5 \n")
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 286; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */