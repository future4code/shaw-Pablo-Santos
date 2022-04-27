import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack } from '../routes/coodinator'
import axios from 'axios'



export const TripDetailPage =()=>{

    const navigate = useNavigate()

    const [tripsdetails, setTripsDetails] = useState({})


    
    useEffect((id)=>{

        const token = localStorage.getItem('token') //guardando o token em uma variavel
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trip/${id}`
        const headers ={
            headers:{
                auth: token
            }
        }

        axios
        .get(url,headers)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err.response)
        })
        


    },[])

return(
    <>
    <h1>Pagina de Detalhes das viajens</h1>
    <button onClick={()=>goToBack(navigate)}>Voltar</button>
    </>
)


}
