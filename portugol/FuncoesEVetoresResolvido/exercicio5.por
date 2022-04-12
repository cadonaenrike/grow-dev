programa
{
	
	funcao inicio()
	{
		inteiro numero
		escreva("Digite um número: ")
		leia(numero)

		se (numero_perfeito(numero) == 1) {
			escreva("\n", "É um número perfeito", "\n")
		} senao escreva("Não é um número perfeito")
	}

	funcao inteiro numero_perfeito(inteiro num)
	{
		se (soma_divisores(num) == num) {
			retorne 1
		} senao retorne 0
	}

	funcao inteiro soma_divisores(inteiro num){
		inteiro divisor
		inteiro soma = 0

		para(divisor = 1; divisor <= num/2; divisor++)
		{
			se (num % divisor == 0) {
				soma = soma + divisor
			} 
		}
		retorne soma
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 567; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */