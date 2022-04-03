function contaOcorrencias(arrayDeNumeros, numeroEscolhido) => arrayDeNumeros.reduce((acc, item)=> if(numeroEscolhido===item){
  return acc + 1
}else{return acc}, 0)
