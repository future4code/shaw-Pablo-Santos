import * as express from "express";
import * as cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
    console.log(res)
})
//exercicio 2
type Users = {
    userId: number,
    id: number,
    tittle: string,
    completed: boolean,
}
//exercicio 3

const arrayUser: Users[] = [{
    userId: 1,
    id: 3,
    tittle: "Dormir",
    completed: true,
},
{
    userId: 4,
    id: 10,
    tittle: "Fuder",
    completed: false,
},
{
    userId: 5,
    id: 20,
    tittle: "Comer",
    completed: false,
}]
//exercicio 4
app.get('/afazeresTrue', (req, res) => {
    const completed = arrayUser.map((complete) => {
        if (complete.completed === true) {
            return complete
        }
    })
    res.send(completed)
})
//exercicio 5
app.post('/criarAfazer', (req, res) => {
    const { userId, id, tittle, completed }: Users = req.body;
    arrayUser.push({ userId, id, tittle, completed })
    res.send(arrayUser)
})

//exercicio 6
app.put('/editAfazer/:id', (req, res) => {
    const idAfazer = Number(req.params.id)
    const { completed } = req.body
    const tarefas: any = arrayUser.find((item) => item.id == idAfazer)
    tarefas.completed = completed
    res.send(tarefas)
})
//exercicio 7 

app.delete('/deleteAfazer/:id', (req, res) => {
    const idAfazer = Number(req.params.id)

    const indexArray = arrayUser.findIndex((afazer) => {
        afazer.id == idAfazer
    })
    if (indexArray === -1)
    return res.status(404).json({ error: "não enconstrado" })
    arrayUser.splice(indexArray, 1)
    return res.status(200).json({ sucess: "Excluido!" })
})

//exercicio 8
app.get('/pegartarefas/:id',(req,res)=>{
const idAfazer = Number(req.params.id)
const findTarefas = arrayUser.filter((arr)=>{
    return arr.userId == idAfazer
});
res.status(200).send(findTarefas)
})










//-------------------------------------------------------

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

