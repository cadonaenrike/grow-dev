let pedro = 1.50;
let lucas = 1.10;
let taxaPedro = 0.02; // taxa de crescimento anual de Pedro em metros
let taxaLucas = 0.03; // taxa de crescimento anual de Lucas em metros
let tempoLucasMaior = 0;
let anos = 0;

while(lucas == pedro){
    pedro = pedro + taxaPedro;
    lucas = lucas + taxaLucas;
    anos++
};

while ( lucas <= pedro) {
    pedro += taxaPedro;
    lucas += taxaLucas;
    tempoLucasMaior++;
  }; 
  document.getElementById("resultado").innerHTML= (
    `Lucas e pedro vão ter o mesmo tamanho em ${anos} anos <br> 
     lucas vai ser maior que pedro em ${tempoLucasMaior} anos`);