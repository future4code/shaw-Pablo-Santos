import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack } from '../routes/coodinator'
import useGetTrips from '../hooks/useGetTrips'
import dataJson from '../json/paises-array.json'


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
    width: 25%;
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
    const [travelId, setTravelId] = useState('')
    const [pais, setPais] = useState('')

    const [trips, setTrips] = useGetTrips()


    const postApplyToTripe = (e) => {
        e.preventDefault()
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/travelId/apply"
        const body = {
            name: name,
            age: age,
            applicationText: textArea,
            profession: profession,
            country: pais,
        }
        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios
            .post(url, body, headers)
            .then((res) => {
                alert("Cadastrado com sucesso")
               

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <ContainerPageForm>
            <h1>Inscreva-se para uma viajem</h1>
            <form action="">
                <select className="selectMundo" name="" onChange={(e) => setTravelId(e.target.value)}>
                    {trips.map((trip) => (
                        <option >{trip.name}</option>
                    ))}
                </select>
                <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='Idade' onChange={(e) => setAge(e.target.value)} />
                <textarea type='text' placeholder='Texto de candidatura' onChange={(e) => setTextArea(e.target.value)} />
                <input type="text" placeholder='Profissão' onChange={(e) => setProfession(e.target.value)} />
                <select className="selectPais" onChange={(e) => setPais(e.target.value)} name="pais" >
                    {dataJson.map((pais) => (
                        <option >{pais.nome}</option>
                    ))}
                </select>


            </form>

            <ContainerBotao>
                <button onClick={() => goToBack(navigate)}>Voltar</button>
                <button onClick={postApplyToTripe}>Enviar</button>
            </ContainerBotao>
        </ContainerPageForm>
    )


}
