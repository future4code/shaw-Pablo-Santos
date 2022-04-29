import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react'

const useGetTrips = () =>{


    
        const [trips, setTrips] = useState([])
        useEffect(()=>{

            axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/trips")
            .then((res) => {
               setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response)
            })

            
        },[])
       

    return [trips, setTrips]

    
}



export default useGetTrips
