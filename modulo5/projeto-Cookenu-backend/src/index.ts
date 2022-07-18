import app from './app'
import * as dotenv from 'dotenv'
dotenv.config();

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})