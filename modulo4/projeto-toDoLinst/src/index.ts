import { Request, Response } from "express"
import app from "./app"
import connection from "./connection"


// Criar Usuário
const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
  await connection('Users').insert({
    id: Date.now().toString(),
    name,
    nickname,
    email,
  })
}

app.post('/user', async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body

    if (!name || !nickname || !email) {
      throw new Error("Todos os campos devem ser preechidos")
    }
    console.log("foi")
    await createUser(name, nickname, email)
    res.end()

  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
});

//-----------------

//Pega Usuário por id

const getUserByID = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT name, id FROM Users WHERE id ='${id}'
  `)

  return result[0]
}


app.get('/user/id/:id', async (req: Request, res: Response) => {

  try {
    const id = req.params.id
    console.log(await getUserByID(id))
    res.send('Sucesso')

  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }

});

//------

//Editar usuário por id

app.put('/user/edit/:id', async (req: Request, res: Response) => {
  try {
    const { name, nickname } = req.body

    await connection('Users').update({ name, nickname }).where({ id: req.params.id })

if(!name || !nickname){
  throw new Error('Os campos name e nickname sao obrigatórios')
}


    res.status(200).send({ message: "Usuario editado" })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }

})

//-----

const creatTasks = async (
  tittle: string,
  description: string,
  limitDate: string,
  status: string,
  creatorUserId: string,
  creatorUserNickname: string
): Promise<any> => {
  await connection("Tasks").insert({
    taskId: Date.now().toString(),
    tittle,
    description,
    limitDate,
    status,
    creatorUserId,
    creatorUserNickname,
  });
};

app.post("/user/creat-task", async (req: Request, res: Response) => {
  try {
    const {
      tittle,
      description,
      limitDate,
      status,
      creatorUserId,
      creatorUserNickname,
    } = req.body;

    await creatTasks(tittle,
      description,
      limitDate,
      status,
      creatorUserId,
      creatorUserNickname);

    res.status(201).send("Conta criada com sucesso!");
  } catch (error: any) {
    console.log(error.message);
    res.send(error.message || error.sqlMessage);
  }
});

//PEGAR ATIVIDADE POR ID

const getTaskById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Tasks WHERE id = "${id}"
`);
  return result[0];
};

app.get("/user/task/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getTaskById(id));

    res.send("Sucesso!");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("ERRO INESPERADO");
  }
});
