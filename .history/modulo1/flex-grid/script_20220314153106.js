arrayDenumeros =[1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]

function contaOcorrencias(arrayDenumeros, numeroEscolhido){
for(let i = 0; i< arrayDenumeros.length ; i++){
    let valorArray = arrayDenumeros[i]
if(valorArray === numeroEscolhido){
    return "Número não encontrado"      
}else{
 return "O número 4 aparece 3x"
}
}
}
console.log(contaOcorrencias(arrayDenumeros,5))