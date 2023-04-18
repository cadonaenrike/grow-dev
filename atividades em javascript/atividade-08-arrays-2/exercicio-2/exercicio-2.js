//2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.
function iniciar() {
    
    let vetor20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let percoridoSomados = 0;
   

    for(i = 0; i < vetor20.length; i++){
        percoridoSomados = percoridoSomados + vetor20[i]; 
        
        document.getElementById("resultado").innerHTML= percoridoSomados;
    }
}