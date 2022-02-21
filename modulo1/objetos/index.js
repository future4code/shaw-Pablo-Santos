const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])//"Virginia Cavendish"
console.log(filme.transmissoesHoje[2]) // {canal: "Canal Brasil", horario: "19h"}


 //-----------------------------------------

 //2. 
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //{nome: "Juca", idade: 3,raca: "SRD"}
console.log(gato)//{nome: "Juba", idade: 3,raca: "SRD"}
console.log(tartaruga)//{nome:Jubo, idade: 3 raca:"SRD"}
//b.
//A sintaxe dos  (...) serve para que possamos copiar o objeto ou uma array da declarada antes

//------------------------------------------------
//3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //false
console.log(minhaFuncao(pessoa, "altura")) // undefined
//b.
/*Na função foi pedido pra que retornasse a propriedade de cada parte do objeto declarada, 
como altura n havia sido declarada teve seu valor como indefinido.*/

//----------------------------------------------------------------------
//Exercicios de escrita de codigo
//1.

const pessoa ={
    nome: "Pablo",
    apelidos:["Baratex", "Bona", "Pantera"]


}
function funcao(pessoa){
    
 return `Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}.`
}
console.log(funcao(pessoa))
const novaPessoa ={
    ...pessoa,
    apelidos:["Kabuloso", "Menor", "Kalica"]
}
funcao(novaPessoa)
console.log(funcao(novaPessoa))

//----------------------------------------------------
//2.
const pessoa1 = {
    nome:"Pablo",
    idade: 30,
    profissao:"Estudante"
}
const pessoa2 ={
    nome:"Goretti",
    idade: 52,
    profissao:"Aposentada"
}
function objeto1(pessoa1){
    
    const resultado = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
    return resultado
}    
console.log(objeto1(pessoa1))

function objeto2(pessoa2){
    const resultado = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
    return resultado
}

console.log(objeto2(pessoa2));
//-------------------------------------------------------
//3.
let carrinho = []

const frutas = {
    nome:"goiaba",
    disponibilidade: true
}
const novaFruta ={
    ...frutas,
    nome: "pera",
}
const outraFruta ={
    ...frutas,
    nome: "manga",
}
function sacolao(frutas, novaFruta, outraFruta){
    resultado = carrinho.push(frutas, novaFruta, outraFruta)
    return resultado
}
sacolao(frutas, novaFruta, outraFruta)
console.log(carrinho);

