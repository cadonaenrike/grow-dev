programa
{
	
	funcao inicio()
	{
		real nota1, nota2, nota3
		caracter tipoMedia

		escreva("Digite sua nota 1: ")
		leia(nota1)

		escreva("Digite sua nota 2: ")
		leia(nota2)

		escreva("Digite sua nota 3: ")
		leia(nota3)

		escreva("Digite A para aritmético ou P para ponderado: ")
		leia(tipoMedia)

		calculaMedia(nota1, nota2, nota3, tipoMedia)
	}

	funcao calculaMedia(real n1, real n2, real n3, caracter tipoMedia)
	{
		se (tipoMedia == 'A' ou tipoMedia == 'P') {
			real media = 0.0
			se (tipoMedia == 'A') {
				media = (n1 + n2 + n3) / 3
			} se (tipoMedia == 'P') {
				real soma = (n1 * 5) + (n2 * 3) + (n3 * 2) 
				media = soma / 10
			}
			escreva ("Sua média foi de: ", media)
		} senao escreva ("Parametro do valor 'A' ou 'P' não foi enviado")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 434; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */