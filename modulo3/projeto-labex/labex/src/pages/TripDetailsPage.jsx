import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack } from '../routes/coodinator'
import axios from 'axios'



export const TripDetailPage =()=>{

    const navigate = useNavigate()

return(
    <>
    <h1>Pagina de Detalhes das viajens</h1>
    <button onClick={()=>goToBack(navigate)}>Voltar</button>
    </>
)


}
