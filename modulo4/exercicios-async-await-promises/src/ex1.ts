import axios from 'axios'
import { baseURL } from './baseURL'

//1
//A.endpoint Get
//B.Promisse<any[]>


async function getAllSubscribers(): Promise<any[]>{
    const response =  await axios.get(`${baseURL}/subscribers`)
    return response.data && console.log(response.data)

};




const main = async ()=>{
    try {
      const getSubscribers = await getAllSubscribers()
        


    } catch (err) {
        
    }
}
main()



