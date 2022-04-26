import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { goToBack } from '../routes/coodinator'



export const CreateTripPage =()=>{
const navigate = useNavigate()

return(
    <>
    <h1>Pagina de criação de viajens</h1>
    <button onClick={()=>goToBack(navigate)}>Voltar</button>
    <button onClick={""}>Criar Viajem</button>

    </>
)


}
