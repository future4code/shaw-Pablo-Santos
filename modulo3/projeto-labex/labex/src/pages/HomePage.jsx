import React, {useState,useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate , useParams } from 'react-router-dom'
import { goToLoginPage} from '../routes/coodinator'
import { goToListTripsPage } from '../routes/coodinator'
import logolabex from '../images/labex-semfudo.png'


const ContainerHome = styled.main`
height: 74vh;
display: flex;
justify-content: center;
align-items: center;

img{
    width:43vw;
    height: 70vh;
    position: relative;
    top:4vh;
    transform: translateY(0px);
animation: float 5s ease-in-out infinite;

}
@keyframes float {
 0%{
     transform: translateY(0px);
 }
 50%{
     transform: translateY(-30px);
 }
 100%{
     transform: translateY(0px);
 }   
 
 
}
article{
display:flex ;
justify-content: center;
flex-direction: column;
align-items: center;
width: 40vw;
position: relative;
top:-4vh;

h2{
width: 16vw;
color: #5180bf;
margin: 10px;
text-align: center;
font-size: 1em;


span{
    color: #011d41;
}
}

button{
    width: 30vw;
    height: 7vh;
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

}

`





export const HomePage =()=>{
const navigate = useNavigate()
const pathParams = useParams()


return(
    <ContainerHome>

    <article>
    <h2>Sua agência de <span>VIAGENS</span> interplanetárias</h2>
    
    <button onClick={()=>goToListTripsPage(navigate)}>Ver Viajens</button>
    <button onClick={()=>goToLoginPage(navigate)}>Area do Administrador</button>
    </article>
    <aside>
        <img src={logolabex} alt="foguete pronto para viajar" />
    </aside>

    </ContainerHome>
)


}
