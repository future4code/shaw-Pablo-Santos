import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { goToBack } from '../routes/coodinator'
import { goToCreateTripPage } from '../routes/coodinator'

export const AdminHomePage =()=>{
const navigate = useNavigate()

return(
    <>
    <h1>Pagina Home ADM</h1>
    <button onClick={()=>goToBack(navigate)}>Voltar</button>
    <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viajem</button>
    <button onClick={""}>Logout</button>

    </>
)


}
