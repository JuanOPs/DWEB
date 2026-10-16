let n1; let n2;

n1 = prompt("Digite o primeiro numero: ");
n2 = prompt("Digite o segundo numero: ");

let soma = parseFloat(n1) + parseFloat(n2);
let subtracao = parseFloat(n1) - parseFloat(n2);
let multiplicacao = parseFloat(n1) * parseFloat(n2);
let divisao = parseFloat(n1) / parseFloat(n2);
let resto = parseFloat(n1) % parseFloat(n2);

alert("soma:" + soma.toFixed(2));
alert("subtração:" + subtracao.toFixed(2));
alert("Produto:" + multiplicacao.toFixed(2));
alert("Divisão:" + divisao.toFixed(2));
alert("resto:" + resto.toFixed(2));
