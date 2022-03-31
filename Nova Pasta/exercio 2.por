programa
{
	
	funcao inicio()
	{
		real macas,valor
		escreva("quantas macas voce deseja comprar? ")
		leia(macas)
		
		se(macas<=12){
		valor = (macas) * 0.30
		escreva(valor)		
		}

		se(macas>12){
		valor = (macas) * 0.25
		escreva(valor)	
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 118; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */