//Exercicicos de interpretação de codigo

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //true

console.log("d. ", typeof resultado) //boolean

//--------------------------------------

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // tem que colocar o tipo numero.

//--------------------------------------

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
//--------------------------------------

// Exercicios de escrita

let suaIdade = Number(prompt("Qual é a sua idade?"))
let idadeAmigo = Number(prompt("Digite a idade do amigo!"))
let idade = suaIdade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo? -", idade )

//--------------------------------------

let numeroPar = Number(prompt("Coloque um numero par"))
let divisao = numeroPar % 2
 console.log(divisao) // Os tipos das variaveis tem que ser numero e nao tem resto
 
//Se dividido por numero impar, o resultado sera o resto da divisão

//--------------------------------------

let idade = Number(prompt("Qual a sua idade?"))
let idadeMeses = idade * 12
let idadeDias = (idade * 12) * 365
let idadeHoras = (24 * 365) * idade

console.log(`Você tem ${idadeMeses} meses de idade!`)
console.log(`Você tem ${idadeDias} dias de vida!`)
console.log(`Você tem ${idadeHoras} horas de vida!`) 

//--------------------------------------
let numero1 = Number(prompt("Coloque um numero!"))
let numero2 = Number(prompt("Coloque outro numero"))

console.log("O primeiro numero é maior que segundo? -", numero1 > numero2) 
console.log("O primeiro numero é igual ao segundo? - ", numero1 === numero2) 
console.log("O primeiro numero é divisível pelo segundo? -", (numero1 % numero2) === 0)
console.log("O segundo numero é divisível pelo primeiro? - ", (numero2 % numero1) === 0)

