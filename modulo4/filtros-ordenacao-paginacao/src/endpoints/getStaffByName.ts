import { Request, Response } from "express"
import { connection } from "../data/connection"
import {labenuStaff} from "../types"


export default async function selectAllStaff():Promise<any> { 
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}

export const getStaffByName = async(req: Request,res: Response): Promise<void> =>{
    try {
       const staff = await selectAllStaff()  
       let name = req.query.name

       if(!staff.length){
          res.statusCode = 404
          throw new Error("No staff members found")
       }
       if(name === ''){
        throw new Error("Nome é obrigatório!")
       };
       const  result  = await connection("aula48_exercicio").where("name", "like",`%${name}%`)
       const labenuStaff: labenuStaff[] = result.map(toLabenuStaff)
       
       res.status(200).send(labenuStaff)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 const toLabenuStaff = (input:any):labenuStaff =>{
return{
   id:input.id,
   name:input.name,
   email:input.email,
   type:input.type
}
 }