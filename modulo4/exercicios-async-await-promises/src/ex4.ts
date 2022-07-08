import axios from 'axios'
import { baseURL } from './baseURL'


//A. Tipo de requisiçao PUT, serve para  criarmos um novo coteúdo

const createNews = async (title: string, content: string, date: number): Promise<void> => {

    await axios.put(`${baseURL}/news`, {
        title,
        content,
        date,
    })

}