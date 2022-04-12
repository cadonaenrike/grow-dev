programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro vetor[] = {1, 2, 3, 4, 5, 52, 40, 54	, 65	,100, 36, 9, 29, 53	,26 }
		para(inteiro i = 0; i < 15; i++) {
			se (vetor[i] % 2 == 0) {
				escreva(vetor[i], ", ")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 147; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */