/*
3. Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"
*/

const valorCompra = Number(prompt("Digite o Valor da compra"));
const numeroParcelas = Number(prompt("Digite a quantidade de parcelas"));
const valorParcelas = valorCompra / numeroParcelas;

document.write(`O valor total da compra foi R$ ${valorCompra} Forma de pagamento: 
${numeroParcelas}X de R$ ${valorParcelas} `);