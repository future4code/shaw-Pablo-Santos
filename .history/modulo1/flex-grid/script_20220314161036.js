arrayDenumeros =[1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]
numeroEscolhido = 4
function contaOcorrencias(arrayDenumeros, numeroEscolhido){

for(let i = 0; i < arrayDenumeros.length; i++ ){
let soma = arrayDenumeros[i]+=1
if(soma === numeroEscolhido){
    return "O número 4 aparece 3x"
    
}else{
return "Número não encontrado"
}
}

}

console.log(contaOcorrencias(arrayDenumeros,numeroEscolhido))