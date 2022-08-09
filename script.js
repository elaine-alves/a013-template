// AULA GUIADA: if e if
//Forma 1:
/*let idadeDependente = 15

if(idadeDependente >= 13){
    if(idadeDependente >= 18){
        console.log("Seu dependente já pode ter um cartão de crédito própio.");
    } else{
        console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu.");
    }
} else{
    console.log("Consulte outras possibilidades do Labank.");
}*/

//Forma 2:
/*if(idadeDependente >=13 &&idadeDependente <18){
    console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu.");
}else{
    console.log("Consulte outras possibilidades do Labank.");
}*/

// if ternário
/*idadeDependente === 13 ? console.log("A idade do dependente é 13 e já pode ter um cartão") : console.log("Consulte outras possibilidades do Labank.");*/

//switch-case
/*let cartao = Number (prompt("Solicitação de cartão de crédito. Escolha uma opção: \n 1- Fácil \n 2- Black \n 3- Platinum \n 4- Master Gold"));

switch (cartao){
    case 1:
        console.log("Cartão Fácil adquirido")
        break;
    case 2:
        console.log("Cartão Black adquirido")
        break;
    case 3:
        console.log("Cartão Platinum adquirido")
        break;
    case 4:
        console.log("Cartão Master Gold adquirido")
        break;   
    default:
        console.log("Escolha uma das opções disponíveis.")
}*/

//EXERCÍCIO DE FIXAÇÃO
//Parte 1 - a e b
/*let numero = Number (prompt("Diga um número:"))

//if aninhado
if((numero%2) == 0){
    if((numero%3) == 0){
        console.log("Esse número é divísivel por 2 e 3.");
    }
    }else{
        console.log("Não é divísivel por 2 nem por 3.");}

//Operador lógico
if((numero%2)===0 || (numero%3)===0){
    console.log("Esse número é divisvel por 2 e por 3.");
}else{
    console.log("Esse número não é divisível por 2 ou 3.");
}*/

//Parte 2
/*let numero = Number (prompt("Diga um número:"));

numero===30 ? console.log("UFA, ACERTEI!!!") : console.log("Não foi dessa vez. :(");*/

//Parte 3
/*let numero = Number (prompt("Diga um número:"))

switch (numero){
    case 6:
        console.log("Seu número é 6!")
        break;
    case 12:
        console.log("Seu número é 12!")
        break;
    case 18:
        console.log("Seu número é 18!")
        break;
    case 24:
        console.log("Seu número é 24!")
        break;
    case 30:
        console.log("Seu número é 30!")
        break;     
    default:
        console.log("Seu número é maior que 30 e menor que 6.")
}*/


