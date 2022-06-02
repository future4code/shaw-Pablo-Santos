
import * as express from "express";
import * as cors from "cors";
import { users } from "./data";
import type { Users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})
let codeError: number = 400

//ex 2
app.get('/users', (req, res) => {
    try {
        const type: string = req.query.type as string
        const searchType: Users[] | undefined = users.filter((user) => user.type === type)
        if (!searchType) {
            codeError = 401
            throw new Error('Types not Found')
        }

        res.status(200).send(searchType)

    } catch (error) {
        res.status(codeError).send({ message: error.message })

    }

})

//ex 1
app.get('/users', (req, res) => {

    try {
        if (!users) {
            codeError = 401
            throw new Error("Users not found!")
        }
        res.send(users)
    } catch (error) {
        res.status(codeError).send({ message: error.message })
    }

})

//ex 3

app.get('/users/:name', (req, res) => {
    try {
        const name: string = req.params.name
        const searchUserByName = users.filter((user) => {
            return user.name === name
        })
        if (!name) {
            codeError = 401
            throw new Error('User not Found')

        }
        res.send(searchUserByName)

    } catch (error) {
        res.status(codeError).send({ message: error.message })
    }

})

// ex 4

app.put('/newUsers', (req, res) => {
    try {
        const { id, name, email, type, age } = req.body

        if (!id || !name || !email || !type || !age) {

            codeError = 422;
            throw new Error('Please check the field')

        }
        const newUser: Users = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(201).send(users)

    } catch (error) {
        res.status(codeError).send({ message: error.message })
    }
})







