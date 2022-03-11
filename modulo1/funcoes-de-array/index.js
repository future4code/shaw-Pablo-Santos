// exercicios de interpretaçao de codigo
//1a. valor do elemento do array, valor do i do elemento e  o array original
//2a. vai imprimir o os nomes do array
//3. imprime todos os itens que nao tem o apelido chijo declarado

//XERCICICOS DE ESCRITA DE CODIGO
//1 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//1

/* const nomePets = pets.map((pet)=>{
     return pet.nome
})
console.log(nomePets);
const salsicha = pets.filter((pet)=>{
   
    return pet.raca === "Salsicha"
})
console.log(salsicha)
const poodles = pets.filter((pet)=>{
    return pet.raca === "Poodle" 
}).map((pet)=>{
return `Voce ganhou um cupom de desconto de  10% para tosar o/a ${pet.nome}`
})
console.log(poodles)
 */
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

/*  
const nomeProdutos = produtos.map((produto)=>{
    return produto.nome

})
console.log(nomeProdutos) */
//b
/* 

const produtosCdesconto = produtos.filter((produto)=>{

return produto.nome && produto.preco

})
console.log(produtosCdesconto); */
//c
/* const bebidas = produtos.filter((produto)=>{

return produto.categoria === "Bebidas"

})
console.log(bebidas) */

//D e E
const marca = produtos.filter((produto)=>{
    return produto.nome.includes("Ypê")

}).map((produto)=>{

    return `Compre ${produto.nome} por ${produto.preco}.`


})
console.log(marca);