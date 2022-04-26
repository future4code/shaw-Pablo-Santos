import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack } from '../routes/coodinator'


export const AplicationFormPage =()=>{
const navigate = useNavigate()

return(
    <>
    <h1>Pagina Formulario</h1>
    <button onClick={()=>goToBack(navigate)}>Voltar</button>
    <button>Enviar</button>
    
    </>
)


}
