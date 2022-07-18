enum Setor{
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro",
}

type Pessoa = {
    nome: string,
    salário: number,
    setor: Setor,
    presencial: boolean
}

const arrayColaboradores: Pessoa[] =[
	{ nome: "Marcos", salário: 2500, setor: Setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor:Setor.VENDAS,presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setor.MARKETING, presencial: true }
]

function marketingPresencial(arrayColaboradores:Pessoa[], setor:string):Pessoa[]{
return arrayColaboradores.filter((colaborador)=>{
       return colaborador.setor === setor
})

}
console.table(marketingPresencial(arrayColaboradores,Setor.VENDAS))