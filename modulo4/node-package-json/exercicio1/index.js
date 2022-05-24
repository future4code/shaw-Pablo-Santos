const nome= process.argv[2]
const idade = Number(process.argv[3]) 

const dados = function(name,idade){
    return `Olá,${name}!Você tem ${idade} anos. Em sete anos você terá ${idade + 7}` 

}
console.log(dados(nome, idade))
