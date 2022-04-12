programa
{
	
	funcao inicio()
	{
		cadeia nomes[5]

		escreva("Primeiro nome: ")
		leia (nomes[0])

		escreva("Segundo nome: ")
		leia (nomes[1])

		escreva("Terceiro nome: ")
		leia (nomes[2])

		escreva("Quarto nome: ")
		leia (nomes[3])

		escreva("Quinto nome: ")
		leia (nomes[4])

		para(inteiro i = 4; i >= 0; i--) {
			se (i !=0) {
				escreva(nomes[i], " ,")
			} senao { 
				escreva(nomes[i], ".")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 294; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */