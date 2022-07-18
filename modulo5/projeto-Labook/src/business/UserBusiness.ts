
import UserData from "../data/UserData";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { loginInputDTO } from "../types/loginInputDTO";
import { signupInputDTO } from "../types/signupInputDTO";

export class UserBusiness {
    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator

    ) { }

    signup = async (input: signupInputDTO) => {
        //validando se todos os campos estão preenchidos
        const { name, email, password } = input
        if (!name || !email || !password) {
            throw new Error("Todos dos campos devem ser preenchidos")
        }

        // validandando se existe usuario
        const registeredUser = await this.userData.findByEmail(email)

        if (registeredUser) {
            throw new Error("Email já cadastrado")
        }

        //criando id
        const id = this.idGenerator.generateID()

        //ciando password hash
        const hashedPassword = this.hashManager.generateHash(password)

        //criando usuario no banco
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        await this.userData.insert(user)
        //criar o token
        const token = this.authenticator.generateToken({ id })

        //retornar token

        return token
    };

    login = async (input: loginInputDTO) => {
        const { email, password } = input
        if (!email || !password) {
            throw new Error("Campos inválidos")
        }

        const registeredUserLogin = await this.userData.findByEmail(email);
        if (!registeredUserLogin) {
            throw new Error("Usuário ainda nao foi cadastrado")
        }

        const correctPassword = this.hashManager.compareHash(password, registeredUserLogin.password)
        if (!correctPassword) {
            throw new Error("Senha incorreta")
        }

        const token = this.authenticator.generateToken({ id: registeredUserLogin.id })

        return token

    }



}