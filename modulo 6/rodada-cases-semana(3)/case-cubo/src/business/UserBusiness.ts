import { UserDataBase } from "../data/UserDataBase"
import { sendParticipationDTO } from "../types"
import { User } from "../model/User"

export class UserBusiness {
    constructor(
        private userDataBase: UserDataBase
    ) { }

    sendParticipation = async (input: sendParticipationDTO) => {
        try {
            const { first_name, last_name, participation } = input

            if (!first_name || !last_name || !participation) {
                throw new Error("Todos os campos devem ser preenchidos!")
            }
            const user = new User(
                first_name,
                last_name,
                participation,
            )

            await this.userDataBase.insert(user)

        } catch (error) {
            throw new Error(error.message)
        }
    };

    getParticipations = async () => {
        return await this.userDataBase.getParticipations()
    }
}