import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { goToBack, goToLoginPage } from '../routes/coodinator'
import { goToCreateTripPage } from '../routes/coodinator'


const ContainerHomeAdm =styled.main`
display: flex;
flex-direction: column;
min-height: 74vh;
align-items: center;
h1{
    margin: 1em;
    color: #011d41;
}

`
const ContainerButton =styled.div`
margin-top: 2em;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
button{
   margin: 5px;
   width: 7vw;
    height: 6vh;
    border-radius: 3px;
    border:none;
    margin:3px;
    background-color:#5180bf;
    color: white;
    cursor: pointer;
    transition:0.3s;
    &:hover{
        box-shadow: 10px 5px 5px #9cb8dd;
    }
    &:active{
        color: #011d41;
    }
}

`







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
    <ContainerHomeAdm>
    <h1>Sala do Admin</h1>
    <div>

    </div>
    <ContainerButton>
    <button onClick={()=>goToBack(navigate)}>Logout</button>
    <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viajem</button>
    </ContainerButton>
    </ContainerHomeAdm>
)


}
