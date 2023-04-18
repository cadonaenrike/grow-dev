let idades = [];
function addIdade(){ // essa função valida e armazena
   console.log(idades)
    let idade = parseInt(document.getElementById("idade").value);
    if(idade != 999){
        idades.push(idade);
        document.getElementById("idade").value = "";
    }else{
        alert("Numero invalido sistema parou")
    }
}
function calcularMedia(){
    let totalAlunos = idades.length
    let somaIdades = idades.reduce((a,b) => a+b,0)
    let medias = somaIdades/totalAlunos
    document.getElementById("resultado").innerHTML = medias.toFixed(2);
}