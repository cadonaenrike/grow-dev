function iniciar(){
    let numero = Number(prompt("Adicione um valor:"));
    
    if (numero <= 1) {
        document.getElementById("resultado").innerHTML= numero + " não é primo.";
    } else if (numero === 2) {
        document.getElementById("resultado").innerHTML=numero + " é primo.";
    } else if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML=numero + " não é primo.";
    };    
}