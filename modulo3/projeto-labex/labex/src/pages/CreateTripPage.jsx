import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { goToBack } from '../routes/coodinator'
import useForm from '../hooks/useForm'
import worldJson from '../json/world-array.json'
import useProtectPage from '../hooks/useProtectPage'


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

const ContainerButton = styled.div`
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
    useProtectPage()
    const navigate = useNavigate()
    const { form, onChange, clearInput } = useForm({ name: '', world: '', date: '', description: '', days: '' });
    const [trips, setTrips] = useState([])

    const getTrips = () => {

        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trips")
            .then((res) => {
                setTrips(res.data.trips)
                alert("Viajem adicionada com sucesso")
            })
            .catch((err) => {
                alert("[ERRO] tente novamente")
            })

    }


    const postCreateTrip = (e) => {

        e.preventDefault();
        clearInput()
        const token = localStorage.getItem('token')
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trips"
        const body = {
            name: form.name,
            planet: form.world,
            date: form.date,
            description: form.description,
            durationInDays: form.days
        }
        const headers = {
            headers: {

                "Content-Type": "application/json",
                auth: token
            }

        }
        axios
            .post(url, body, headers)
            .then((res) => {

                getTrips()
            })
            .catch((err) => {
                console.log(err)
            })

    };






    const selectWorld = worldJson.map((world) => (
        <option>{world.nome}</option>
    ))


    return (
        <ContainerCreateTrip>
            <h1>Criação de viajens</h1>
            <form onSubmit={postCreateTrip}>
                <input onChange={onChange} name={'name'} value={form.name} type="text" placeholder='Nome' />
                <select onChange={onChange} name={"world"} value={form.world} >
                    {selectWorld}
                </select>
                <input onChange={onChange} name={"date"} value={form.date} type="date" ></input>
                <textarea onChange={onChange} name={"description"} value={form.description} placeholder="Descrição" type="text" />
                <input onChange={onChange} name={'days'} value={form.days} type="number" placeholder='Duração em dias' />
                <button>Criar Viajem</button>
            </form>
            <ContainerButton>
                <button onClick={() => goToBack(navigate)}>Voltar</button>

            </ContainerButton>
        </ContainerCreateTrip>
    )

}
