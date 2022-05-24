import React from "react";
import styled from "styled-components"


export const ContainerSignup =styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 85vh;
padding: 1em;
`
export const Tittle =styled.h1`
color: #fb5c62;
margin-bottom: 2em;

`

export const ContainerForm =styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 20em;
width: 100%;
`
export const InputSignup =styled.input`
height: 5vh;
padding-left:1em;
margin: 0.3em;
width: 90%;
border-radius: 3px;
border: 1px solid #D5D8DE;
`
export const ContainerCheckbox = styled.div`
display: flex;
input{
    position: relative;
    top: 0.2em;
}

`
export const ButtonCadastrar =styled.button`
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
