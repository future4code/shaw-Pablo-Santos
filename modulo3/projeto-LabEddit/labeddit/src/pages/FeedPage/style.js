import React from "react";
import styled from "styled-components"

export const ContainerFeed = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;

`
export const ContainerForm =styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`

export const IputFeed=styled.input`
height: 4vh;
padding-left:1em;
margin: 0.3em;
width: 60%;
border-radius: 3px;
border: 1px solid #D5D8DE;
margin: 0.5em;
`
export const TextAreaInput=styled.textarea`
background: #EDEDED;
border-radius: 12px;
width: 90%;
height: 10em;
margin: 0.5em;
border: #EDEDED;
padding:1em 0 0 1em;
`
export const ButtonPostar=styled.button`
width: 75%;
height: 3em;
color:  white;
background:linear-gradient(to right, rgb(255, 65, 108), rgb(255, 75, 43));
border-radius: 10px;
border: none;
font-size: 1em;
cursor: pointer;
transition: 0.3s;
margin-bottom: 1em;
margin-top: 0.5em;
&:hover{
    background:linear-gradient(to left, rgb(255, 65, 108), rgb(255, 75, 43));
    width: 77%;
}
&:active{
    color: black;
}


`
export const DivStyle=styled.div`
width:90%;
background:linear-gradient(to right, rgb(255, 65, 108), rgb(255, 75, 43));
height: 1px;
margin-bottom:1.5em;
`
