import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { goToAplicationFormPage, goToBack } from '../routes/coodinator'

export const ListTripsPage =()=>{
const navigate = useNavigate()
return(
    <>
    Pagina de listas de viajens
    <button onClick={()=>goToBack(navigate)}>Voltar</button>
    <button onClick={()=>goToAplicationFormPage(navigate)}>Inscreva-se</button>

    </>
)


}
