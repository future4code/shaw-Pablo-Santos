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
export const getOrderStaff = async (req: Request, res: Response): Promise<void> => {
    try {
        const staff = await selectAllStaff()
        let order = req.query.order
        let sort = req.query.sort
    

        if (!staff.length) {
            res.statusCode = 404
            throw new Error("No staff members found")
        }
      
        if (order !== 'asc' && order !== 'desc') {
            order = 'asc'
        }
        if(sort !== 'name' && sort !== 'type'){
            sort = 'email'
        }

        const result = await connection("aula48_exercicio").orderBy(sort,order);
        const labenuStaff: labenuStaff[] = result.map(toLabenuStaff);

        res.status(200).send(labenuStaff)

    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

