const nome = prompt("Qual é o seu nome ?")
let idade = Number(prompt("Quantos anos vc tem ?"))

console.log(typeof nome,typeof idade)
console.log(`Olá ${nome},você tem ${idade} anos`)
//--------------------------------
const tenis ="Não"
const almoco ="Sim"
const computador ="Sim"

console.log(`Você gosta de tenis colorido? - ${tenis} `)
console.log(`VOcê ja almoçou hoje? - ${almoco}`)
console.log(`Voce tem computador - ${computador}`)

//-------------------------------
let a = 10
let b = 25
a = 25
b = 10
 console.log(`O novo valor de a é ${a}`)
 console.log(`O novo valor de b é ${b}`)


//-------------------------------
let a = 10
let b = 10
console.log(b)
// 10
b = 5
console.log (a, b)
//10, 5

//--------------------------------

let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)
//10, 10, 10

//--------------------------------

let horasDia = prompt("Quantas horas vc trabalha por dia?")
let valorDia = prompt("Quantos vc recebe por dia?")
alert(`Você recebe ${ valorDia / horasDia } por dia!`)

//--------------------------------
//Desafio
let a = Number(prompt())
let b = Number(prompt())
let x = a + b;
let y = a * b;

console.log(x, y)
