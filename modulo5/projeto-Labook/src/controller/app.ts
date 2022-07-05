import * as dotenv from 'dotenv'
import * as express from 'express'
import * as cors from 'cors'
dotenv.config();

export const app = express()
app.use(express.json)
app.use(cors())

const server = app.listen(3033,()=>{
    if(server){
        const address = server.address();
        console.log("Servidor rodando na porta 3003")
    }else{
        console.log("server is not avaible")
    }
});