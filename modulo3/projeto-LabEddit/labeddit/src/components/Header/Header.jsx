import React, { useState } from "react";
import { ContainerHeader } from "./style";
import {goToFeedPage, goToLoginPage,} from "../../router/coodinator";
import { useNavigate } from "react-router-dom";





export const Header =({rightButtonText,setRightButtonText})=>{

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
   
    
    const logout =()=>{
         localStorage.removeItem('token')
     }

     const rightButtonAction =()=>{
         if(token){
             logout()
             setRightButtonText("Login")
             goToLoginPage(navigate)
         }else{
             goToLoginPage(navigate)
         }
     }

    return(
    
    <ContainerHeader>
    <a onClick={()=>goToFeedPage(navigate)}>LabEddit</a>
    <button onClick={rightButtonAction}>{rightButtonText}</button>

    </ContainerHeader>
)

}