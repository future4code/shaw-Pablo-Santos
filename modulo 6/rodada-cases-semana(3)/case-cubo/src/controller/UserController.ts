import { Request, Response } from 'express'
import { sendParticipationDTO } from '../types'
import { UserBusiness } from '../business/UserBusiness'


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    sendParticipation = async (req: Request, res: Response) => {
        try {
            const { first_name, last_name, participation } = req.body

            const input: sendParticipationDTO = {
                first_name,
                last_name,
                participation,
            }
            await this.userBusiness.sendParticipation(input)
            res.status(200).send({ message: 'Usuário e participação registrado com sucesso' })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message);
            }
            res.status(500).send("Erro ao adicionar participação");
        }
    };

    getAllParticipations = async (req: Request, res: Response) => {
        try {
            const result = await this.userBusiness.getParticipations()
            res.status(200).send(result);
        } catch (error: any) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro na solicitação")
        }
    }
}
