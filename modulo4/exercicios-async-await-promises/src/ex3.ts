import axios from 'axios'
import { baseURL } from './baseURL'

//A. Não tem por que o tipo ja foi definido
//B. Sim para que possamos ver quais os tipos retornaram  dessa promisse e se houver algum podemos tratalas da melhor forma.


type user ={
    id: string,
    name:string,
    email:string
}

const getAllSubscribers = async ():Promise<user[]> =>{
const response = await axios.get(`${baseURL}/subscribers`)
return response.data.map((res:any)=>{
    return {
        id: res.id,
        name: res.name,
        email: res.email,
    }
})

}


const main = async ()=>{
    try {
      const getSubscribers =  console.log(await getAllSubscribers())
        


    } catch (err) {
        
    }
}
main()
