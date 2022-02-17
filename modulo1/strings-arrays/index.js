 let array
console.log('a. ', array)// indefinido


array = null
console.log('b. ', array)// null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11 
 

let i = 0
console.log('d. ', array[i]) // 3



array[i+1] = 19
console.log('e. ', array) // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]


const valor = array[i+6] 
console.log('f. ', valor)// 9
 

//-----------------------------------------------
//Exercicios de escrita de codigo

const email =prompt("Insira seu e mail")
const nome =prompt("Digite seu nome")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`) */
//-----------------------------------------------

let comidas = ["🦐", "🍛", "🥕","🥐", "🍕"]
console.log(comidas)

console.log(`Essas sao minhas comidas preferidas:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`
)


let pergunta = prompt("Diga uma comida preferida...")
let troca = 0
comidas[troca+1] = pergunta
console.log(comidas) 
//------------------------------------------------


const listaDeTarefa = []
listaDeTarefa[0] = prompt("Me diga uma tarefa do seu dia!")
listaDeTarefa[1] = prompt("Me diga a segunda tarefa indispensável no seu dia!")
listaDeTarefa[2] = prompt("Me diga a terceira tarefa indipensável do seu dia!")
console.log(listaDeTarefa)

const tarefaCumprida=prompt("Qual das tres tarefas mencionadas vc ja realizou 0,1ou2?")
console.log(tarefaCumprida)
listaDeTarefa.pop(tarefaCumprida)
console.log(listaDeTarefa)

