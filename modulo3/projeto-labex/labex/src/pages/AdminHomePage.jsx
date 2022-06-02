import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { goToBack, goToLoginPage, goToTripDetail } from '../routes/coodinator'
import { goToCreateTripPage } from '../routes/coodinator'
import useProtectPage from '../hooks/useProtectPage'


const ContainerHomeAdm = styled.main`
display: flex;
flex-direction: column;
min-height: 74vh;
align-items: center;
h1{
    margin-top: 0.5em;
    color: #011d41;
}

`
const CardTripsAdm = styled.div`
text-align: center;
width: 400px;
min-height: 10px;
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
button{
   margin: 5px;
   width: 9vw;
   font-size:0.6em;
    height: 6vh;
    border-radius: 3px;
    border:none;
    margin:3px;
    background-color:#5180bf;
    color: white;
    cursor: pointer;
    transition:0.3s;
    &:hover{
        box-shadow: 0 0 1em #011d41;
    }
    &:active{
        color: #011d41;
    }
}
`

const ContainerButton = styled.div`
margin-top: 0.5em;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
button{
   margin: 5px;
   width: 12vw;
   font-size:0.6em;
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


export const AdminHomePage = () => {
    useProtectPage()
    const navigate = useNavigate()
    const [trips, setTrips] = useState([])

    const getTrips = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trips"
        axios
            .get(url)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response)
            })


    }
    useEffect(() => {
        getTrips()
    }, [])


    //req deletar trip
    const deleteTrip = (id) => {

        const token = localStorage.getItem('token')
        axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trips/${id}`, {

        headers: {

            "Content-Type": "application/json",
            auth: token
        }

        })

        .then ((res) => {
            alert ('Viagem deletada')
            getTrips ()
        })
        
        .catch((err) => {
            alert ('[Erro], tente novamente')
        })

    }

    //window.localStorage.clear('token)   para deslogar

    const tripsAdm = trips.map((trip) => {
        return <CardTripsAdm key={trip.id}><p>{trip.name}</p>
            <button onClick={() => goToTripDetail(navigate, trip.id)}>Ver Detalhes</button>
            <button onClick={() => deleteTrip(trip.id)}> X </button>
        </CardTripsAdm>
    })


    return (
        <ContainerHomeAdm>
            <h1>Sala do Admin</h1>
            <ContainerButton>
                <button onClick={() => goToBack(navigate)}>Logout</button>
                <button onClick={() => goToCreateTripPage(navigate)}>Criar Viajem</button>
            </ContainerButton>
            <div>
                {tripsAdm}
            </div>

        </ContainerHomeAdm>
    )


}
