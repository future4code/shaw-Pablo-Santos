import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { createPostDTO } from "../types/createPostDTO";


export default class PostController {
    constructor(
        private postBusines: PostBusiness
    ) { }

    createPost = async (req: Request, res: Response) => {
        const token = req.headers.authorization as string
        const { photo, description, type } = req.body

        const input: createPostDTO = {
            photo,
            description,
            type
        }

        try {
            const newPost = await this.postBusines.createPost(input, token)
            res.status(201).send({ message: "Post criado com sucesso", newPost })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message);
            }
            res.status(500).send("Erro no ao criar post");
        }
    }

    getPostByID = async (req: Request, res: Response) => {

        const token = req.headers.authorization as string

        const { id } = req.params;

        try {
            const post = await this.postBusines.getPostByID(id, token)
            res.status(200).send({ post })

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message);
            }
            res.status(500).send("Post nao encontrado!");
        }

    }

}


