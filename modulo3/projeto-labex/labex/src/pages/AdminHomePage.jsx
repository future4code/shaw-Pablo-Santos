import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { goToBack, goToLoginPage } from '../routes/coodinator'
import { goToCreateTripPage } from '../routes/coodinator'

export const AdminHomePage =()=>{
const navigate = useNavigate()


//window.localStorage.clear('token)   para deslogar

useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token === null){
        goToLoginPage(navigate)
    }
},[navigate])


return(
    <>
    <h1>Pagina Home ADM</h1>
    <button onClick={()=>goToBack(navigate)}>Logout</button>
    <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viajem</button>
   
    </>
)


}
