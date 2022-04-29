import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack } from '../routes/coodinator'
import axios from 'axios'
import useProtectPage from '../hooks/useProtectPage'



export const TripDetailPage = () => {

    const navigate = useNavigate()
    useProtectPage()

    const [tripDetails, setTripDetails] = useState([])
   
    const params = useParams()
console.log(params)
    const getTripDetail = () => {

        const token = localStorage.getItem('token') //guardando o token em uma variavel
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trip/${params.id}`
        const headers = {
            headers: {
                auth: token
            }
        }

        axios
            .get(url, headers)
            .then((res) => {
                setTripDetails(res.data.trip)
                console.log(res)
            })
            .catch((err) => {
                console.log(err.response)
            })


    }

    useEffect(() => {
        getTripDetail()

    }, [])

    return (
        <>
            <h1> Detalhes das viajens</h1>
            <p><strong>Nome:</strong> {tripDetails.name}</p>
            <p><strong>Descrição:</strong> {tripDetails.description}</p>
            <p><strong>Planeta:</strong> {tripDetails.planet}</p>
            <p><strong>Duração: </strong>{tripDetails.durationInDays} dias</p>
            <p><strong>Data: </strong>{tripDetails.date}</p>
            <br />

            <button onClick={() => goToBack(navigate)}>Voltar</button>
        </>
    )


}
