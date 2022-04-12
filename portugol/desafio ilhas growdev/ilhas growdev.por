programa
{
	
	funcao inicio()
	{
		inteiro saque
		inteiro nota1 = 50
		inteiro nota2 = 10
		inteiro nota3 = 5
		inteiro nota4 = 1

		inteiro quantidaDeNotaN1 = 0
		inteiro quantidaDeNotaN2 = 0
		inteiro quantidaDeNotaN3 = 0
		inteiro quantidaDeNotaN4 = 0

		escreva("Qual valor deseja Sacar? ")
		leia(saque)
		enquanto (saque > 0 ){
			enquanto(saque >= nota1 e saque % nota1 != 0){
				saque=saque-nota1
				quantidaDeNotaN1++
			}

			enquanto(saque>= nota2){
				saque=saque - nota2
				quantidaDeNotaN2++
			}

			enquanto(saque>= nota3){
				saque=saque - nota3
				quantidaDeNotaN3++
			}

			enquanto(saque>= nota4){
				saque=saque - nota4
				quantidaDeNotaN4++
			}
		}

		escreva("GC$", nota1, "->", quantidaDeNotaN1, "\n" )
		escreva("GC$", nota2, "->", quantidaDeNotaN2, "\n" )
		escreva("GC$", nota3, "->", quantidaDeNotaN3, "\n" ) 
		escreva("GC$", nota4, "->", quantidaDeNotaN4, "\n" )
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 900; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */