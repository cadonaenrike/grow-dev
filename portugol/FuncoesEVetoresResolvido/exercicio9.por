programa
{
	
funcao unirVetores(inteiro vetor1[], inteiro vetor2[]) {
		inteiro uniao[20]

		para (inteiro i = 0; i < 10; i++)
		{
			uniao[i] = vetor1[i]
		}

		para (inteiro j = 0; j <10; j++)
		{
			uniao[10 + j] = vetor2[j]
		}

		para(inteiro x = 0; x < 20; x++) {
			escreva(uniao[x], " ")
		}
	}
	funcao inicio()
	{
		inteiro vetor1[] = {10, 20, 30, 40, 40, 10, 20, 30, 40, 40}
		inteiro vetor2[] = {10, 20, 30, 40, 40, 10, 20, 30, 40, 40}

		unirVetores(vetor1, vetor2)
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 486; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */