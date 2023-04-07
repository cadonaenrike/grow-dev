function calcular(){
    let i = 1;
    let resultado3 = "";
    let resultado5 = ""
    while (i <= 250) {
        if (i % 3 === 0) {
            resultado3 += `${i} é múltiplo de 3<br>`;
        }
        if (i % 5 === 0) {
            resultado5 += `${i} é múltiplo de 5<br>`;
        }
          i++;}
    document.getElementById("resultado").innerHTML = "Os multiplos de 5 são: <br>" + resultado5 +"<br>Os multiplos de 3 são: <br>" + resultado3;
}