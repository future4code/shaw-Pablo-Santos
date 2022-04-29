import React from "react";
import axios from "axios";
import {useState, useEffect} from 'react'

const useGetTrips = (stateInitial, url) =>{


    
        const [trips, setTrips] = useState(stateInitial)
        useEffect(()=>{

            axios
            .get(url)
            .then((res) => {
               setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response)
            })

            
        },[url])
       

    return trips

    
}



export default useGetTrips
