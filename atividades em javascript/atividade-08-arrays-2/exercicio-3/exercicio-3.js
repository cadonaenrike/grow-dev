
function iniciar(){
    let contador = 1;
    let numerosPerfeitos = [];

    while(numerosPerfeitos.length < 4){ // defini onde vai parar
        let somaDivisores = 0;

        for(let i = 1; i<contador; i++){ // faz as somas dos divisores
            if(contador % i === 0){
                somaDivisores += i 
            }
        }

        if(somaDivisores === contador){ // verifica se é perfeito
            numerosPerfeitos.push(contador);
        }
        contador++
    }

    document.write(numerosPerfeitos)
}