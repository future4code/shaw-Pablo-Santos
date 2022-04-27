import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { goToAplicationFormPage, goToBack } from '../routes/coodinator'

const ContainerListTrips = styled.main`
min-height: 74vh;
margin: 0 auto;
display: flex;
flex-direction: column;
background-color: white;
align-items: center;
overflow: hidden;

`
const ContainerCardTrips=styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 10px;

`
const CardTrips =styled.div`
text-align: center;
width: 400px;
height: 150px;
margin: 5px;
border-radius: 3px;
transition:0.3s;
cursor: pointer;

/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b2e1ff+0,66b6fc+100;Blue+3D+%236 */
background: #b2e1ff; /* Old browsers */
background: -moz-linear-gradient(-45deg,  #b2e1ff 0%, #66b6fc 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg,  #b2e1ff 0%,#66b6fc 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg,  #b2e1ff 0%,#66b6fc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b2e1ff', endColorstr='#66b6fc',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

&:hover{
    box-shadow: 0 0 2em #011d41;
}
p{
    padding: 2px;
    margin:2px;
}
`
const ContainerBotao =styled.div`

display: flex;
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





export const ListTripsPage = () => {
    const navigate = useNavigate()
    const [trips, setTrips] = useState([])

    const getTrips = () => {

        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trips")
            .then((res) => {
                console.log(res)
               setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response)
            })

    }

    useEffect(() => {
        getTrips()
    }, [trips])

    const allTrips = [...trips].map((trip)=>{
        return <CardTrips key={trip.id}>
            <p>{trip.planet}</p>
            <p>{trip.description}</p>
            <p>{trip.date}</p>
            

        </CardTrips>

    })



    return (
        <ContainerListTrips>
            <h1>Todas as viajens disponíveis</h1>
            <button onClick={() => goToBack(navigate)}>Voltar</button>
            <ContainerBotao>
                
                <button onClick={() => goToAplicationFormPage(navigate)}>Inscreva-se</button>
            </ContainerBotao>

            <ContainerCardTrips>
           {allTrips}
           </ContainerCardTrips>
          
        </ContainerListTrips>
    )


}
