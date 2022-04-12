programa
{
	
	funcao inicio()
	{	real peso
		inteiro idade
	
		escreva("digite seu peso:")
		leia(peso)
		escreva("digite sua idade:")
		leia(idade)



		se(idade>=0 e idade <=12  e peso == peso){
			escreva("Categoria infantil ")
			}
		se(idade >= 13 e idade<=16 e peso <= 40){
			escreva("Categoria Juvenil leve")
				}
		se(idade >= 13 e idade<=16 e peso > 40){
			escreva("Categoria Juvenil Pesado")
				}
		se(idade >= 17 e idade<=24 e peso <= 45){
			escreva("Categoria Senior leve")
				}
		se(idade >= 17 e idade<=24 e peso > 45 e peso<=60){
			escreva("Categoria Senior medio")
				}		
		se(idade >= 17 e idade<=24 e peso > 60){
			escreva("Categoria Senior Pesado")
				}
		
		se(idade > 24 ){
			escreva("Categoria Veterano ")
			}		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 550; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */