import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { goToBack } from '../routes/coodinator'
import { goToAdminHomePage } from '../routes/coodinator'




export const LoginPage =()=>{
const navigate = useNavigate()

return(
    <>
    Pagina de Login
    <button onClick={()=>goToBack(navigate)}>Voltar</button>
    <button onClick={()=>goToAdminHomePage(navigate)}>Entrar</button>

    </>
)


}
