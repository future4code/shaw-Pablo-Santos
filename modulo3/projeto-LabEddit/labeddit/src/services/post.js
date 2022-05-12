import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";




export const postCreatePost =(body,clear,getPostsData)=>{

    axios
    .post(`${BASE_URL}/posts`, body,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res)=>{
        console.log(res)
        clear()
        getPostsData()
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

};

export const postCreatePostVote =(id)=>{
    const body = {
            direction: 1,
    }
    axios
    .post(`${BASE_URL}/posts/${id}/votes`, body,{
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

export const putChangePostVote =(id)=>{
    const body = {
            direction: -1,
    }
    axios
    .put(`${BASE_URL}/posts/${id}/votes`, body,{
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
 