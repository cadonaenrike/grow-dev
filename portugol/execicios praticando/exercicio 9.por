programa
{
	
	funcao inicio()
	{
		inteiro tabuada, contador , interacoes

	escreva("Digite o primeiro numero da taboada ")
	leia(tabuada)
	escreva("Digite o numero de interações ")
	leia(interacoes)

		para(contador=1; contador <= interacoes ; contador++)
		{
			inteiro resultado = contador * tabuada
			escreva(contador + "x" + tabuada + "=" + resultado + "\n")
			
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 372; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */