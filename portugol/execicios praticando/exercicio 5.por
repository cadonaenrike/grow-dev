programa
{
	inclua biblioteca Texto --> t
	funcao inicio()
	{
		inteiro anos
		cadeia nome

		escreva("Digite quantos anos voce vai fazer: ")
		leia(anos)

		escreva("Seu nome: ")
		leia (nome)

		inteiro anoDeNaci =(anos - 2022)
		inteiro suaIdade = (anos- 1)
		inteiro  letrasDoNome = t.numero_caracteres(nome) 

		escreva("Nasceu em : ", anoDeNaci ,"\n")
		escreva("Sua idade é: ", suaIdade ,"\n")
		escreva("Seu nome possui : ", letrasDoNome," letras")
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 12; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */