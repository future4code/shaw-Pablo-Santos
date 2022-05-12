import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";



export const postCreateCommentsVote =(id)=>{
    const body = {
            direction: 1,
    }
    axios
    .post(`${BASE_URL}/comments/${id}/votes`, body,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        alert(res.data)
    })
    .catch((err)=>{
        console.log(err)
        alert(err.response.data.message)
    })

};

export const putChangeCommentsVote =(id)=>{
    const body = {
            direction: -1,
    }
    axios
    .put(`${BASE_URL}/comments/${id}/votes`, body,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        alert("Deslike Registrado")
        console.log(res)
    })
    .catch((err)=>{
        
        alert(err.response.data.message)
    })

};

