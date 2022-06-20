export type Extrato = {
    valor: number,
    data: Date,
    descricao: string
}

export type Dados= {
    name: string,
    cpf: number,
    nascimento: Date,
    saldo: number,
    extrato: Extrato[],
}
export const usuarios:Dados[] = [
    {
        name:"Pablo",
        cpf: 12211122211,
        nascimento: new Date('1900-03-12'),
        saldo: 1200,
        extrato: [{
            valor: 200,
            data: new Date('2022-03-31'),
            descricao: "Casa"
        },
        {
            valor: 400,
            data: new Date('2022-03-31'),
            descricao: "Biscoito"
        },
        {
            valor: 500,
            data:new Date('2022-03-31'),
            descricao: "coca"
        },
        {
            valor: 200,
            data:new Date('2022-03-31'),
            descricao: "Feijao"
        }]
    },
    {
        name: "Servulo",
        cpf: 12211122214,
        nascimento: new Date('2091-03-02'),
        saldo: 4000,
        extrato: [{
            valor: 200,
            data: new Date('2022-05-03'),
            descricao: "Mercado Arssuçao"
        },
        {
            valor: 400,
            data:new Date('2022-05-03'),
            descricao: "Restaurante"
        },
       ]
    },

]