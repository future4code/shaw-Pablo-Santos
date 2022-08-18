import { User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase"


export class UserDataBase extends BaseDataBase {
    private TABLE_NAME = "Paticipantes_Cubo"

    public insert = async (user: User) => {
        try {
            await this.connection(this.TABLE_NAME).insert(user)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public getParticipations = async (): Promise<any> => {
        try {
            const result = await this.connection(this.TABLE_NAME).select("*")
            if (!result) {
                throw new Error("Sem usuários registrados")
            }
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }


    }
}