
function iniciar(){
    const salario = Number(prompt("Adicione seu salario"));

    if(salario > 1903.98 ){
        document.getElementById("resultado").innerHTML= "TRIBUTADO NO IR"
    }else{
        document.getElementById("resultado").innerHTML= "ISENTO DE IR" 
    }
}