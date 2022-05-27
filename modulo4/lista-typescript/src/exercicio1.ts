/* const nome:string = "Pablo"
const data:string = "29/03/1991"
 */
function nascimento(nome:string,data:string):string{
    const array:string[]= data.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${array[0]} do mês de ${array[1]} do ano de ${array[2]}`
}
console.log (nascimento("pablo","10/12/2011"))