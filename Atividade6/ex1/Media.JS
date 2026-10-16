let nota1; let nota2; let nota3; let nota4;

nota1 = prompt("Digite a primeira nota: ");
nota2 = prompt("Digite a segunda nota: ");
nota3 = prompt("Digite a terceira nota: ");
nota4 = prompt("Digite a quarta nota: ");

let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

alert(media.toFixed(2));

