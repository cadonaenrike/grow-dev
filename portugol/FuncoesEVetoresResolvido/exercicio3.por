programa
{
	
	funcao inicio()
	{
		inteiro numero
		logico retorno 

		escreva("Digite um número: ")
		leia(numero)

		escreva("O número :", numero, " é primo?", primo(numero))
	}

	funcao logico primo(inteiro num)
	{
		logico concl = verdadeiro
		inteiro divis = 0

		se (num <= 1) {
			retorne falso 
		}

		para(inteiro cont = 2; cont < num; cont++){
			se (num % cont == 0) {
				divis++ 
				pare
			} 
		}
		se (divis != 0) {
			concl = falso
		}
		retorne concl
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 473; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */