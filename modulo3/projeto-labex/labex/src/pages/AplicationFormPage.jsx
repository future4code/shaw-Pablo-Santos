import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack } from '../routes/coodinator'

const ContainerPageForm = styled.main`

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

.selectMundo{

border-radius: 2px;
border:0.3px solid grey;
padding-left:5px;
}    
    
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

.selectPais{
margin-top:5px;
border-radius: 2px;
border:0.3px solid grey;
padding-left:5px;
}

`

const ContainerBotao = styled.div`
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


export const AplicationFormPage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [textArea, setTextArea] = useState('')
    const [profession, setProfession] = useState('')

    return (
        <ContainerPageForm>
            <h1>Inscreva-se para uma viajem</h1>
            <form action="">
                <select className="selectMundo" name="" value={""}>
                    <option>Marte</option>
                </select>
                <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='Idade' onChange={(e)=> setAge(e.target.value)} />
                <textarea type='text' placeholder='Texto de candidatura' onChange={(e)=>setTextArea(e.target.value)}/>
                <input type="text" placeholder='Profissão' onChange={(e)=> setProfession(e.target.value)}/>
                <select className="selectPais" name="pais" value={""}>
                    <option>País</option>
                </select>
            </form>

            <ContainerBotao>
                <button onClick={() => goToBack(navigate)}>Voltar</button>
                <button>Enviar</button>
            </ContainerBotao>
        </ContainerPageForm>
    )


}
