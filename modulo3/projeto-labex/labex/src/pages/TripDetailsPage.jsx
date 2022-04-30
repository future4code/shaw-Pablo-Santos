import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack } from '../routes/coodinator'
import axios from 'axios'
import useProtectPage from '../hooks/useProtectPage'
import styled from 'styled-components'

const ContainerDetails = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 74vh;
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
const CardCandidates =styled.div`
text-align: center;
width: 400px;
min-height: 150px;
margin: 5px;
border-radius: 3px;
transition:0.3s;


/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b2e1ff+0,66b6fc+100;Blue+3D+%236 */
background: #b2e1ff; /* Old browsers */
background: -moz-linear-gradient(-45deg,  #b2e1ff 0%, #66b6fc 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg,  #b2e1ff 0%,#66b6fc 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg,  #b2e1ff 0%,#66b6fc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b2e1ff', endColorstr='#66b6fc',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

&:hover{
    box-shadow: 0 0 1em #011d41;
}
p{
    padding: 2px;
    margin:2px;
}
`
const ContainerButtons =styled.div`
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




export const TripDetailPage = () => {
    useProtectPage()
    const navigate = useNavigate()


    const [tripDetails, setTripDetails] = useState([])
    const [candidates, setCandidates] = useState([])
    const [canditadesApproved, setCandidatesApproved]= useState([])
    
    const params = useParams()

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
                setCandidates(res.data.trip.candidates)
                setCandidatesApproved(res.data.trip.approved)

            })
            .catch((err) => {
                console.log(err.response)
            })


    }

    useEffect(() => {
        getTripDetail()

    }, [])
    // req candidatos aprovados
    const putCandidateAproved = (id) => {

        const body = {

            approve: true
        }

        const token = localStorage.getItem('token')

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trips/${params.id}/candidates/${id}/decide`, body, {

            headers: {

                "Content-Type": "application/json",
                auth: token
            }

        })

            .then((res) => {
                alert('Aprovado')
                getTripDetail()

            })

            .catch((err) => {
                alert('[ERRO], Tente novamente')
            })

    };
    //req desaprovar candidatos
    const putCandidateDesaproved = (id) => {

        const body = {

            approve: false
        }

        const token = localStorage.getItem('token')

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trips/${params.id}/candidates/${id}/decide`,
        body, {

            headers: {

                "Content-Type": "application/json",
                auth: token
            }

        })

            .then((res) => {
                alert('Descartado')
                getTripDetail()

            })

            .catch((err) => {
                alert('[ERRO], Tente novamente')
            })

    };






    const candidatos = [...candidates].map((candidato) => {
        return <CardCandidates key={candidato.id}>
            <p>Nome: {candidato.name}</p>
            <p>Profissão: {candidato.profession}</p>
            <p>Idade: {candidato.age}</p>
            <p>País: {candidato.country}</p>
            <p>Texto de candidatura: {candidato.applicationText}</p>
            <ContainerButtons>
                <button onClick={() => putCandidateDesaproved(candidato.id)}>Descartar</button>
                <button onClick={() => putCandidateAproved(candidato.id)}>Aprovar</button>
            </ContainerButtons>
        </CardCandidates>

    });


    const aprovados = [...canditadesApproved].map((aprovado)=>{
        return <p key={aprovado.id}>{aprovado.name}</p>

    })


    return (
        <ContainerDetails>
            <>
                <h1> Detalhes das viajens</h1>
                <p><strong>Nome:</strong> {tripDetails.name}</p>
                <p><strong>Descrição:</strong> {tripDetails.description}</p>
                <p><strong>Planeta:</strong> {tripDetails.planet}</p>
                <p><strong>Duração: </strong>{tripDetails.durationInDays} dias</p>
                <p><strong>Data: </strong>{tripDetails.date}</p>
                <br />
            </>
            <>
            <p>Candidatos aprovados</p>
                {aprovados}
            </>
            <>
                {candidatos}
            </>
                
            <button onClick={() => goToBack(navigate)}>Voltar</button>
        </ContainerDetails>
    )


}
