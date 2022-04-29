import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coodinator";

const  useProtectPage =()=>{
    const navigate = useNavigate()


    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token === null){
            goToLoginPage(navigate)
        }
    },[])
    

}
export default useProtectPage