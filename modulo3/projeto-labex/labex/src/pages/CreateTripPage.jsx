import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { goToBack } from '../routes/coodinator'

const ContainerCreateTrip = styled.main`
display: flex;
flex-direction: column;
min-height: 74vh;
align-items: center;
h1{
    margin: 1em;
    color: #011d41;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:25%;
    
input{
margin-top:5px;
border-radius: 2px;
border:0.3px solid grey;
padding-left:5px;
} 
textarea{

margin-top:5px;
border-radius: 2px;
border:0.3px solid grey;
padding-left:5px;

}

select{
margin-top:5px;
border-radius: 2px;
border:0.3px solid grey;
padding-left:5px;
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

export const CreateTripPage = () => {
    const navigate = useNavigate()

    return (
        <ContainerCreateTrip>
            <h1>Criação de viajens</h1>
            <form>
            <input type="text" placeholder='Nome' />
            <select name="" >
                <option>marte</option>
            </select>
            <input type="date"></input>
            <textarea placeholder="Descrição" type="text"name=""/>
            <input type="number" placeholder='Duração em dias'/>
            </form>
            <ContainerButton>
                <button onClick={() => goToBack(navigate)}>Voltar</button>
                <button onClick={""}>Criar Viajem</button>
            </ContainerButton>
        </ContainerCreateTrip>
    )


}
