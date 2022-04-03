function contaOcorrencias(arrayDeNumeros, numeroEscolhido) => arrayDeNumeros.reduce((acc,item)=> numeroEscolhido===item ? acc+1 : acc,0 )
