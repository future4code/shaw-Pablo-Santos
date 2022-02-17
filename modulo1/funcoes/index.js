// Exercicios de interpretação de codigo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//a.10, 50  b.Nada


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//a. essa funçao transforma td q foi escrito na mensagem em minusculo, e se estiver escrito a palavra cenoura vai retornar se é true ou false( se tem ou nao tem a palavra cenoura)
//b. true | ii. true | iii.true


//---------------------------------------------------
//Exercicios de escrita de codigo

function mensagem1(){
    const mensagem = "Eu sou Pablo, tenho 30 anos, moro em Barra Mansa e sou estudante."
    
    return mensagem
    
}
let minhaResposta = mensagem1()

console.log(minhaResposta)


    const nome = "Pablo"
    const idade = 30
    const cidade = "Barra mansa"
    const profissao = "Estudante"

function sobreMim(nome, idade, cidade, profissao){
   
const mensagem = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`
return mensagem

}
let resposta = sobreMim(nome, idade, cidade, profissao)
console.log(resposta);
// ----------------------------------------------------------
//.a
let num1 = 5
let num2 = 10
function soma(num1,num2){

    return num1 + num2

}
const resultado = soma(num1,num2) 
console.log(resultado)

//b
let num1 = 20
let num2 = 50
function boolean(num1, num2){

    return num1 > num2
}
let resultado = boolean(num1, num2)
console.log(resultado);

//c
let num = 20
function boolean(num){

    return (num %  2) === 0
}
let resultado = boolean(num)
console.log(resultado);

//d

const mensagem = "uma mensagem pra voce"
function upper(mensagem){
const minusculo = mensagem.toUpperCase()
return minusculo

}
const resultado = upper(mensagem)
console.log(resultado);
//------------------------------------------------
//3

let num1 = Number(prompt("Digite um numero!"))
let num2 = Number(prompt("Digite outro numero!"))
let numerosInseridos = `Numeros inseridos: ${num1} e ${num2}`

console.log(numerosInseridos)

function funcaoSoma(num1,num2){
return num1 + num2
}
resultadoSoma = funcaoSoma(num1,num2)
console.log(`Soma: ${resultadoSoma}`)

function funcaoSubtracao(num1,num2){
    return num1 - num2
    
}
let resultadoSubtracao = funcaoSubtracao(num1,num2)
console.log(`Diferença: ${resultadoSubtracao}`);

function funcaoMultiplicacao(num1,num2){
return num1 * num2
}
let resultadoMultiplicacao = funcaoMultiplicacao(num1,num2)

console.log(`Multiplicação: ${resultadoMultiplicacao}`);


function funcaoDivisao(num1,num2){
   return num1 / num2 
}
resultadoDivisao = funcaoDivisao(num1,num2)
console.log(`Divisão: ${resultadoDivisao}`);