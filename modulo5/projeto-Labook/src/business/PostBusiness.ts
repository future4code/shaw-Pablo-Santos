import * as moment from "moment"
import PostData from "../data/PostData";
import { Post } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { createPostDTO } from "../types/createPostDTO";


export default class PostBusiness {
    constructor(
        private postData: PostData,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    createPost = async (input: createPostDTO, token: string) => {
        const { photo, description, type } = input
        if (!photo || !description || !type) {
            throw new Error("Todos os campos devem ser preechidos!")
        }

        const id = this.idGenerator.generateID()

        const createAt = moment().format("YYYY-MM-DD")

        //confere se o token é válido 
        const tokenData = this.authenticator.getTokenData(token)
        if (!tokenData) {
            throw new Error("Token inválido")
        };

        const post = new Post(
            id,
            photo,
            description,
            type,
            createAt,
            tokenData.id
        )

        await this.postData.insert(post)

        return post

    }

    getPostByID = async (id: string, token: string) => {

        const tokenData = this.authenticator.getTokenData(token)
        if (tokenData) {
            throw new Error("Token inválido")
        };

        const post = await this.postData.getById(id)
        return post

    }


}