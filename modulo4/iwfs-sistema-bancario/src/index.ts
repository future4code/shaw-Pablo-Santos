import * as express from "express";
import * as cors from "cors";
import type { Dados, Extrato } from "./data";
import { usuarios } from "./data";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})
//PEGAR TODOS OS USUÁRIOS
app.get("/usuarios", (req, res) => {
    res.send(usuarios);
  });
//CADASTRAR USUARIOS  
app.post('/usuarios/cadastro', (req, res) => {
    let errorCode: number = 400
    try {
       
        const { name, cpf, nascimento, saldo, extrato } = req.body
        const findCpf = usuarios.find((usuario) => usuario.cpf === cpf );
        const newDate = new Date(nascimento)
        const idade: number = Math.floor((Date.now() - newDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
        
        if (findCpf) {
            errorCode = 401
            throw new Error("Cpf já cadastrado")
        }
        if (!name || !cpf ||  !nascimento ) {
            errorCode = 422;
            throw new Error("Please check the fields!")
          }
        if (idade < 18) {
            errorCode = (418)
            throw new Error('Você precisa ser maior de 18 para criar sua conta !')
        }
        const novoUsuario: Dados = {
            name,
            cpf,
            nascimento,
            saldo,
            extrato,
        }
        usuarios.push(novoUsuario)
        res.status(200).send({ message: "Usuario cadastrado com sucesso" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
