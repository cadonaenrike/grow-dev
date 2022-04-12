programa
{
	
	funcao inicio()
	{
		cadeia emailBanco = "j@gmail.com" , senhaBanco = "123"
		cadeia email, senha
		escreva("Seja bem vindo ao GROWBANK\n")
		escreva("Digite seu login: ")
		leia(email)
		escreva("Digite sua senha: ")
		leia(senha)

		se(email ==  emailBanco e senha == senhaBanco){
		escreva("Login efetuado \n seja Bem vindo!! ")}
		
		senao{
		escreva("Email ou Senha invalidos")}
		
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 418; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */