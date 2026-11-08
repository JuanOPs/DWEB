let somaIdade = 0;
let pessoas = 0;
const totalPessoas = 5;
let pessVelha = 0;
let pessNova = 0;
let quantPessimo = 0;
let maNumero = 999;
let quantHomem = 0;
let quantMulher = 0;

for(pessoas = 0; pessoas < totalPessoas; pessoas++){
    let nome = prompt("Digite seu nome: ");
    let idadeStr = prompt("Digite sua idade: ");
    let idade = Number(idadeStr);
    let genero = prompt("Digite seu genero (H-Homem, M-Mulher): ");
    let notaStr = prompt("Digite sua opinião (de 1 a 4): ");
    let nota = Number(notaStr);

    if(!isNaN(idade)){
        somaIdade += idade;
    }
    else{
        idadeStr = prompt("Por favor, digite um numero valido: ");
        idade = Number(idadeStr);
    }

    if (idade > pessVelha){
        pessVelha = idade;
    }
    if(idade < maNumero){
        pessNova = idade;
    }

    if (nota == 1){
        quantPessimo++;
    }

    if (genero === 'h'||genero === 'H'){
        quantHomem++;
    }
    if(genero === 'm'||genero === 'M'){
        quantMulher++;
    }
}
let mediade = somaIdade / totalPessoas;
alert("A media das idades é: " + mediade);
alert("Pessoa mais velha: " + pessVelha);
alert("Pessoa mais nova: " + pessNova);
alert("Quantidade de pessoas que responderam pessimo: " + quantPess);
alert("quantidade de homens: " + quantHomem);
alert("quantidade de mulheres: " + quantMulher);


