import React from "react";
import styled from "styled-components"

export const ContainerLogin =styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 96vh;
padding: 1em;

`
export const Tittle =styled.h1`
color: #fb5c62;
`
export const ContainerForm =styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 11em;
width: 100%;

`
export const InputLogin =styled.input`
height: 5vh;
padding-left:1em;
margin: 0.3em;
width: 90%;
border-radius: 3px;
border: 1px solid #D5D8DE;
`
export const ButtonLogin =styled.button`
width: 75%;
height: 3em;
color:  white;
background:linear-gradient(to right, rgb(255, 65, 108), rgb(255, 75, 43));
border-radius: 27px;
border: none;
font-size: 1em;
cursor: pointer;
transition: 0.3s;
margin: 0.5em;
&:hover{
    background:linear-gradient(to left, rgb(255, 65, 108), rgb(255, 75, 43));
    width: 77%;
}
&:active{
    color: black;
}

`
 export const ContainerSignup=styled.div`
 display: flex;
 align-items: center;
 
 span{
     cursor: pointer;
     margin: 0.2em;
     text-decoration: underline;
     transition:0.3s;
     &:hover{
         color:#fb5c62 ;
         font-size: 1.2em;
     }
 }
 `