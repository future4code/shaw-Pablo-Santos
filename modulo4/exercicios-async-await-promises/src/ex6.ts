import axios from 'axios'
//A. cria um array de promises
//B. otimiza a requisiçao e acaba respondendo mais rapido
//C. 

import { baseURL } from "./baseURL";

type user = {
    id: string,
    name: string,
    email: string
}


const createNews = async (title: string, content: string, date: number): Promise<void> => {

    await axios.put(`${baseURL}/news`, {
        title,
        content,
        date,
    })

}

const getAllSubscribers = async () : Promise<any[]> =>{
    const response =  await axios.get(`${baseURL}/subscribers`)
    return response.data;
}


    const sendNotifications = async (users: user[], message: string): Promise<void> => {
    try {
        const promises = users.map(user => {
            return axios.post(`${baseURL}/notifications`), {
                subscriberID: user.id,
                message: message
            }
        })
        await Promise.all(promises)
    } catch (error) {
        console.log(error)
    }
}



const main = async() =>{
try {
    const send = await sendNotifications([], 'olá')
} catch (error) {
    
}


}