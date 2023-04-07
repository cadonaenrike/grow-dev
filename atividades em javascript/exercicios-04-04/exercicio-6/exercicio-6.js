function operacao(){
   let n1 = parseInt(document.getElementById("n1").value);
   let n2 = parseInt(document.getElementById("n2").value);
   let operacao1 = document.getElementById("operacao1").value;
   let result

   switch(operacao1){
        case "+":
        result = n1 + n2;
        document.getElementById("resultado").innerHTML ="Sua Operação é " + n1 + " Mais " + n2 + " Resultando em " + result;
        break    
        case "-":
            result = n1 - n2
            document.getElementById("resultado").innerHTML ="Sua Operação é " + n1 + " Menos " + n2 + " Resultando em " + result;
        break    
        case "*":
            result = n1 * n2
            document.getElementById("resultado").innerHTML ="Sua Operação é " + n1 + " Vezes " + n2 + " Resultando em " + result;
        break    
        case "/":
            result = n1 / n2
            document.getElementById("resultado").innerHTML ="Sua Operação é " + n1 + " Dividido " + n2 + " Resultando em " + result;
        break
        default:
            document.getElementById("resultado").innerHTML ="Digite valores validos";
   }
}