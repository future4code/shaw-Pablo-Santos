import axios from 'axios'
import { baseURL } from './baseURL';

//A. na  funçao noemada o async vem antes de chamar a função, ja na arrow function o  async pe colocado antes da flecha.
//B.
 const getAllSubscribers = async () : Promise<any[]> =>{
    const response =  await axios.get(`${baseURL}/subscribers`)
    return response.data;

};




const main = async ()=>{
    try {
      const getSubscribers = await getAllSubscribers()
        


    } catch (err) {
        
    }
}
main()
