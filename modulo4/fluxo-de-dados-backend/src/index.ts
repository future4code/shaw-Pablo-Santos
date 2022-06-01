import * as express from 'express'
import * as cors from 'cors'
import { produtos } from './data'

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//------------------------------------------------------------

app.get('/teste', (req, res) => {
    return res.send('pong ♥')
})
// ex 3
app.post('/produtos', (req, res) => {

    try {
        const { name, price } = req.body
        const generateId: string = Math.floor(Date.now() * Math.random()).toString(36) 
    
        if ((!price)) {
            throw new Error("Preço não enviado")
        }
        if (!name) {
            throw new Error("Nome não enviado")
        }
        if (price <= 0) {
            throw new Error("Preço precisa ser maior que 0")
        }
        if (req.body.name !== "string" || req.body.price !== "number") {
            throw new Error("Nome ou preço invalido")
        }
        if (price !== Number) {
            throw new Error("Digite um numero")
        }

        produtos.push({ id:generateId, name, price })
        res.send(produtos)

    } catch (error:any) {
        switch (error.message) {
            case "Preço não enviado":
                res.status(422).send(error.message)
                break;
            case "Nome não enviado":
                res.status(422).send(error.message)
                break;
            case "Preço precisa ser maior que 0":
                res.status(409).send(error.message)
                break;
            case "Nome ou preço invalido":
                res.status(409).send(error.message)
                break;
            case "Digite um numero":
                res.status(404).send(error.message)
                break;
            default:
                res.status(500);
                error.message("Erro Inesperado do servidor")
                break
        }

    }

})

//exe 4
app.get('/todos-os-produtos', (req, res) => {
    res.send(produtos.map((produto) => {
        return produto
    }))
})

//ex 5

app.put('/editar-preco/:id', (req, res) => {
    const idProdutos = req.params.id
    const { price } = req.body
    const novoPreco: any = produtos.find((item) => item.id === idProdutos)
    novoPreco.price = price
    res.send(novoPreco)
})


//ex 6


app.delete('/deleteProdutos/:id', (req, res) => {

    const idProdutos = req.params.id

    const indexProdutos = produtos.findIndex((i) => {
        i.id === idProdutos
    })

    function produtosAtualizados(): any {
        if (indexProdutos === -1) {
            return res.status(404).json({ error: "Não encontrado" })
        } else {
            produtos.splice(indexProdutos, 1);
            return produtos;
        }
    }
    res.send(produtosAtualizados())
})



