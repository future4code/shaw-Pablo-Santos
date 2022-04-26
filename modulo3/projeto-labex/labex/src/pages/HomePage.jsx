import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate , useParams } from 'react-router-dom'
import { goToLoginPage} from '../routes/coodinator'
import { goToListTripsPage } from '../routes/coodinator'

export const HomePage =()=>{
const navigate = useNavigate()
const pathParams = useParams()


return(
    <>
    <h1>Home</h1>
    <button onClick={()=>goToListTripsPage(navigate)}>Ver Viajens</button>
    <button onClick={()=>goToLoginPage(navigate)}>Area do Administrador</button>
    </>
)


}
