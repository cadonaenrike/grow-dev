const anos = prompt("insira sua idade");
const mes = anos * 12;
const dias = anos * 365;
/*
alert("voce nasceu a " + mes+ " meses" )
alert("Ja se passaram " + dias + " Dias vividos")
*/

if (!isNaN(Number(anos))){
    alert("voce nasceu a " + mes+ " meses" )
    alert("Ja se passaram " + dias + " Dias vividos")
    
}
    else{
        alert ("Utilize somentes numeros inteiros")
    }
