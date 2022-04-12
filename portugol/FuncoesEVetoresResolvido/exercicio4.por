programa
{	funcao converteSegundos(inteiro segundo)
	{
	inteiro hora = segundo / 3600
	inteiro minuto = (segundo % 3600) / 60
	inteiro seg = (segundo % 3600) % 60
	escreva(hora, ":", minuto, ":", seg)
	}
	
	funcao inicio()
	{
	inteiro seg
	escreva("Digite total em segundos: ")
	leia(seg)

	converteSegundos(seg)
		}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 142; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */