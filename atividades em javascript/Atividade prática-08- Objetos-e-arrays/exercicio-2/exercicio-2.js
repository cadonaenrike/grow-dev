// 2. Crie um objeto em JavaScript para colocar 5 atributos de um
//                 notebook. Atribua os seguintes atributos:
//                 Processador = i7
//                 Memória = 16GB
//                 Preço = 5000
//                 HD = 1TB
//                 SSD = 256GB
//                 Por fim, mostre o nome e valor de cada atributo no console,
//                 exatamente como está na atividade.
function home(){
   window.location.href = "/descricao/descricao.html";
}

function iniciar(){
   let notebook = {
    Processador: "i7",
    Memória: "16GB",
    Preço: 5000,
    HD: "1TB",
    SSD: "256GB"
   }
   console.log("notebook",notebook)
   console.log(notebook.Processador);
   console.log(notebook.Memória);
   console.log(notebook.Preço + " Reais");
   console.log(notebook.HD);
   console.log(notebook.SSD);
   document.getElementById("resultado").innerHTML= "Abra seu console utilizando a tecla F12";
}