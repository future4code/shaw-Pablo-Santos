let arrayDenumeros =[1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]
let numeroEscolhido = 4
function contaOcorrencias(arrayDenumeros, numeroEscolhido){
let resultado = 0
let quantidade = arrayDenumeros.length
for(let i = 0 ; i < quantidade; i++ ){
let posicao = arrayDenumeros[i]

if(posicao === numeroEscolhido){
resultado =+2
}

}
return resultado
}
console.log(contaOcorrencias(arrayDenumeros,numeroEscolhido))