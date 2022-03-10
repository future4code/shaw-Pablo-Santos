// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 const numeros = array
 numeros.sort(function(a, b) {
    return a - b;
  })
  return numeros
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPar = array.filter(par =>(par % 2) === 0)
  return numerosPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPar = array.filter(par =>(par % 2) === 0)
    let quadrados = numerosPar.map(function (item){
      return Math.pow(item, 2)  
    })
    return quadrados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = array.reduce(function(a, b){
      return Math.max(a,b)
    
  }, - Infinity)
return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objeto = {
    maiorNumero: Math.max(num1, num2),
    maiorDivisivelPorMenor:Math.max(num1, num2) % Math.min(num1, num2) === 0  ,
    diferenca:Math.max(num1, num2) - Math.min(num1, num2)
}
return objeto
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares =[]
       for( let i = 0 ; numerosPares.length < n; i++)
       if(i % 2 === 0){
           numerosPares.push(i)
       }
       return numerosPares
   


}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA == ladoB && ladoB == ladoC){
    return "Equilátero"
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        return "Isósceles"
    }else{
    return "Escaleno"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
array.sort((a,b)=> a-b)
const segundoMenor = array[1]
const segundoMaior = array[array.length -2]
return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const diabo ={
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel",
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
    }
   return `Venha assistir ao filme ${diabo.nome}, de ${diabo.ano}, dirigido por ${diabo.diretor} e estrelado por ${diabo.atores[0]}, ${diabo.atores[1]}, ${diabo.atores[2]}, ${diabo.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 
    
    let novosDados = {
     ...pessoa,
     nome: "ANÔNIMO",
}
    return novosDados
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
const pessoasAltorizadas = pessoas.filter((pessoas)=>{
    return pessoas.altura >= 1.5  && pessoas.idade > 14 && pessoas.idade <= 60
})

return pessoasAltorizadas

}



// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAltorizadas = pessoas.filter((pessoas)=>{
        return pessoas.altura < 1.5  || pessoas.idade <= 14 || pessoas.idade > 60
    })
    
    return naoAltorizadas
    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}