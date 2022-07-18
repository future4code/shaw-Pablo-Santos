import { Post } from "../model/Post";
import { Basedatabase } from "./BaseDataBase";



export default class PostData extends Basedatabase {
    protected TABLE_NAME = "labook_posts"
    insert = async (post: Post) => {
        try {
            await this.connection(this.TABLE_NAME).insert(post)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro ao criar o post!");
            }
        }
    }

    getById = async (id: string): Promise<Post> => {
        try {
            const result = await this.connection(this.TABLE_NAME).select("*").where({ id })

            return new Post(
                result[0].id,
                result[0].photo,
                result[0].description,
                result[0].type,
                result[0].created_at,
                result[0].author_id
            )
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error("Erro ao buscar o post!");
            }
        };
    }


}



