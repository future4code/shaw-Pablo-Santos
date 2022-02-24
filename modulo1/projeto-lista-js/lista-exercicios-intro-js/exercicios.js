// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const h = Number(prompt("Digite a altura do retangulo!"))
  const b = Number(prompt("Digite a largura do retangulo!"))
 
  const resultado = h * b
  console.log(resultado);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
  
  const resultado = anoAtual - anoNascimento
  console.log(resultado);
}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  
return peso / (altura*altura)
  
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Digite seu email?")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const nome = prompt("Diga uma cor favorita!")
  const idade = prompt("Diga mais uma cor favorita!")
  const email = prompt("diga outra cor favorita!")
  const cores = [nome, idade, email]
  console.log(cores);

}

// EXERCÍCIO 06

function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()

}

// EXERCÍCIO 07

function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return custo / valorIngresso

}

// EXERCÍCIO 08

function checaStringsMesmoTamanho(string1, string2) {
  
  return string1 >= string2

}

// EXERCÍCIO 09

function retornaPrimeiroElemento(array) {
const array0 = array[0]
  return array0

} 

// EXERCÍCIO 10

function retornaUltimoElemento(array) {

  const arrayFinal = array.length-1
  
  return array[arrayFinal]

}

// EXERCÍCIO 11

function trocaPrimeiroEUltimo(array) {
const finalIndex = array.length-1
const primeiroArray = array[finalIndex]
const ultimoArray = array[0]
array[0] = primeiroArray
array[finalIndex] = ultimoArray
return array

}

// EXERCÍCIO 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
 const stringG = string1.toUpperCase()
 const stringA = string2.toUpperCase()

  return stringG == stringA
 
}

function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}