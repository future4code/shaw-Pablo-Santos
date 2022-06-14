import { Request, Response } from "express"
import { connection } from "../data/connection"
import { labenuStaff } from "../types"


export default async function selectAllStaff(): Promise<any> {
    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

    return result[0]
}
const toLabenuStaff = (input: any): labenuStaff => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }
}
export const getAllFilters = async (req: Request, res: Response): Promise<void> => {
    try {
        const staff = await selectAllStaff()
        let { name, type, order, sort } = req.query
        let { pages }: any = Number(req.query)

        const size: number = 5
        let offset: number = (pages - 1) * size

        if (pages < 1 || isNaN(pages)) {
            pages = 1
        }

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff members found")
        }
        if (sort !== 'email' && sort !== 'type') {
            sort = 'name'
        }
        if (order !== 'asc' && order !== 'desc') {
            order = 'desc'
        }


        const result = await connection("aula48_exercicio").select('*').where("name", "like", `${name}`).or.where("type", "like", `${type}`).orderBy(sort, order).limit(size).offset(offset);

        const labenuStaff: labenuStaff[] = result.map(toLabenuStaff);

        res.status(200).send(labenuStaff)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};
