programa {
    inclua biblioteca Matematica
    funcao inicio() {
        real pedro = 1.50
        real lucas = 1.10

        inteiro anos = 1
        inteiro igual = 0
        inteiro maior = 0

        enquanto (lucas <= pedro){

            pedro = Matematica.arredondar(pedro + 0.02, 2) 
            lucas = Matematica.arredondar(lucas + 0.03, 2)

          escreva("pedro: " + pedro + " | lucas: " + lucas + "\n") 

            se(lucas == pedro){
                igual = anos
            }

            se (lucas > pedro){
                maior = anos
            }

            anos++
        }

        escreva("Igual: " + igual + "\n")
        escreva("Maior: " + maior)
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 688; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */