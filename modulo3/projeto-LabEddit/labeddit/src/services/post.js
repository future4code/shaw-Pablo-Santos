import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";




export const postCreatePost =(body,clear)=>{

    axios
    .post(`${BASE_URL}/posts`, body,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res)
        alert(res.data)
        clear()
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })

};


export const postCreateComent =(body,clear,params)=>{

    axios
    .post(`${BASE_URL}/posts/${params.id}/comments`, body,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res)
        alert(res.data)
        clear()
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })

}
 