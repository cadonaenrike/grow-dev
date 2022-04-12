programa
{
	
	funcao inicio()
	{
		inteiro vetor[] = { 11, 12, 13, 14, 15 }
		inteiro numero = 14

		contemNumero(vetor, numero)
	}
	funcao logico contemNumero(inteiro vetor[], inteiro meuNumero) {
		para (inteiro i = 0; i < 5; i++) {
			inteiro numeroAtual = vetor[i]
			se (numeroAtual == meuNumero) {
				escreva("O número ", meuNumero, " existe no vetor")
				retorne verdadeiro
			}
		}
		escreva("O número ", meuNumero, " não existe no vetor")
		retorne falso
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 102; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */