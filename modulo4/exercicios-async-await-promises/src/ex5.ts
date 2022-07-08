import axios from "axios";
import { baseURL } from "./baseURL";

type user = {
    id: string,
    name: string,
    email: string
}
async function getAllSubscribers(): Promise<any[]>{
    const response =  await axios.get(`${baseURL}/subscribers`)
    return response.data && console.log(response.data)

};


const arrayUsers = async (users: user[], message: string): Promise<void> => {
    for (const user of users) {
    try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message,
            });
            console.log("All notifications sent");
        }
    
     catch (error) {
        console.log("Error");
    }
    }
}

const main = async ()=>{
try {
    const getSubscribers = await getAllSubscribers()
   
} catch (error) {
    
}


}
main()