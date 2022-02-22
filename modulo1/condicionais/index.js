// EXERCICICOS DE INTERPRETAÇÃO
//1.

//A. O codigo pede ao usuario para que teste se o numero que foi colocado no prompt é um numero divisível ou nao.
//B. Sé o resultado da equaação for  identico a  0 ele aprova e passa no teste
//C. Para os numeros que nao sao divisiveis  
//--------------------------------------------------------------

//2.
//A. O codigo acima foi criado n intuido de consultar os preços de cada fruta
//B. O preço da fruta maçã é R$2,25
//C. O preço da fruta pera é R$5
//---------------------------------------------------------------

//3
//A.O programa está perdindo ao usuario que digite um numero 
//B. a menssagem seria esse numero passou no teste ;Se fosse -10 nao apareceria nada
//C. Sim, erro de variavel nao definida, pois ela se entra apenas dentro do escopo da condição
//----------------------------------------------------------------
//EXERCICICOS DE ESCRITA DE CÓDIGO
//1
/* const idade = Number(prompt("Qual é a sua idade?"))
if(idade >= 18){
    console.log("É maior de idade, pode dirigir");
}else{
    console.log("Voce nao pode dirigir");
}
*/
//2.
/* const turno = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

if(turno == "M"){
console.log("Bom dia!");
}else if(turno == "V"){
    console.log("Boa tarde");
}else{
console.log("Boa Noite");
}
 */
//3.
/* const turno = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

switch(turno){
    case "M":
        console.log("Bom dia !");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break;
}
 */

//4.

/* const genero = prompt("Qual genero de filme vc gosta?").toUpperCase()
const valor = Number(prompt("Qual o valor do ingresso?"))

if(genero === "FANTASIA" && valor === 15 ){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme 😪 ");
}
 */



//DESAFIO
/* 
const genero = prompt("Qual genero de filme vc gosta?").toUpperCase()
const valor = Number(prompt("Qual o valor do ingresso?"))
const lanchinho = prompt("Qual lanchinho vc vai comprar ?")

if(genero === "FANTASIA" && valor === 15 ){
    console.log("Bom filme!")
    console.log(`E aproveite seu ${lanchinho} `);
}else{
    console.log("Escolha outro filme 😪 ");
}

 */


const nomeCompleto = prompt("Digite seu nome completo:")
const tipoDeJogo = prompt("Digite o tipo de jogo IN p/ Intercional ou DO p/ Domestico").toUpperCase()
const etapaJogos = prompt("Digite qual etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase()
const categoria = Number(prompt("Digite o numero da categoria 1,2,3 ou 4"))
const quantidaDeIngressos = Number(prompt("Quantos ingressos?"))

console.log("--- Dados da Compra ---");
//TIPO DE JOGO
if(tipoDeJogo ==="IN"){
    console.log(`Nome do Cliente: ${nomeCompleto}`);
    console.log("Tipo do jogo: Internacional");
}else if(tipoDeJogo === "DO"){
    console.log(`Nome do Cliente: ${nomeCompleto}`);
    console.log("Tipo do jogo: Nacional");
}
//ETAPA
if(etapaJogos === "SF"){
    console.log("Etapa do Jogo: Semi-final")
}else if(etapaJogos === "DT"){
    console.log("Etapa do jogo: Decisão do Terceiro Lugar")

}else if(etapaJogos==="FI"){
    console.log("Etapa do Jogo: Final");
}
//CATEGORIA
if(categoria === 1){
    console.log(`Categoria: ${categoria}`);
}else if(categoria === 2){
    console.log(`Categoria: ${categoria}`);
}else if(categoria === 3){
    console.log(`Categoria: ${categoria}`);
}else if(categoria === 4){
    console.log(`Categoria: ${categoria}`);
}
console.log(`Quantidade de ingressos: ${quantidaDeIngressos}`); 
console.log("--- Valores ---")
//Arrays dos valores dos ingressos 
let valorDoSf = [1320.00, 880.00, 550.00, 220.00]
let valorDoDt = [660.00, 440.00, 330.00, 170.00]
let valorDoFi =[1980.00, 1320.00,880.00,330.00]
//valores ingresso semi final
if(tipoDeJogo === "DO" && etapaJogos === "SF"  && categoria === 1){
    let valorIngresso = valorDoSf[0]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);

}else if(tipoDeJogo === "DO" && etapaJogos === "SF"  && categoria === 2){
    let valorIngresso = valorDoSf[1]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);

}else if(tipoDeJogo === "DO" && etapaJogos === "SF"  && categoria === 3){
    let valorIngresso = valorDoSf[2]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);

}else if(tipoDeJogo === "DO" && etapaJogos === "SF"  && categoria === 4){
    let valorIngresso = valorDoSf[3]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}
// VALORES TERCEIRO LUGAR
if(tipoDeJogo === "DO" && etapaJogos === "DT"  && categoria === 1){
    let valorIngresso = valorDoDt[0]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);

}else if(tipoDeJogo === "DO" && etapaJogos === "DT"  && categoria === 2){
    let valorIngresso = valorDoDt[1]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "DT"  && categoria === 3){
    let valorIngresso = valorDoDt[2]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "DT"  && categoria === 4){
    let valorIngresso = valorDoDt[3]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}
//VALORES FINAL
if(tipoDeJogo === "DO" && etapaJogos === "FI"  && categoria === 1){
    let valorIngresso = valorDoFi[0]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);

}else if(tipoDeJogo === "DO" && etapaJogos === "FI"  && categoria === 2){
    let valorIngresso = valorDoFi[1]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "FI"  && categoria === 3){
    let valorIngresso = valorDoFi[2]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "DO" && etapaJogos === "Fi"  && categoria === 4){
    let valorIngresso = valorDoFi[3]
    let resultado = valorIngresso  * quantidaDeIngressos
    
    console.log(`O valor do ingresso é : ${valorIngresso}`)
    console.log(`Valor total :${resultado}`);
}
// VALORES INTERNACIONAIS
if(tipoDeJogo === "IN" && etapaJogos === "SF"  && categoria === 1){
    
    let valorIngresso = valorDoSf[0]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "SF"  && categoria === 2){
    
    let valorIngresso = valorDoSf[1]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "SF"  && categoria === 3){
    
    let valorIngresso = valorDoSf[2]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "SF"  && categoria === 4){
    
    let valorIngresso = valorDoSf[3]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é: ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}
// VARLOR TERCEIRO INTERNACIONAL
if(tipoDeJogo === "IN" && etapaJogos === "DT"  && categoria === 1){
    
    let valorIngresso = valorDoDt[0]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "DT"  && categoria === 2){
    
    let valorIngresso = valorDoDt[1]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "DT"  && categoria === 3){
    
    let valorIngresso = valorDoDt[2]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "DT"  && categoria === 4){
    
    let valorIngresso = valorDoDt[3]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é: ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}
// VALOR FINAL INTERNACIONAL
if(tipoDeJogo === "IN" && etapaJogos === "FI"  && categoria === 1){
    
    let valorIngresso = valorDoFi[0]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "FI"  && categoria === 2){
    
    let valorIngresso = valorDoFi[1]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "FI"  && categoria === 3){
    
    let valorIngresso = valorDoFi[2]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é : ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}else if(tipoDeJogo === "IN" && etapaJogos === "Fi"  && categoria === 4){
    
    let valorIngresso = valorDoFi[3]
    let variavelDolar = valorIngresso * 4.1
    let resultado = variavelDolar * quantidaDeIngressos
    
    console.log(`O valor do ingresso em Dolar é: ${variavelDolar}`)
    console.log(`Valor total :${resultado}`);
}