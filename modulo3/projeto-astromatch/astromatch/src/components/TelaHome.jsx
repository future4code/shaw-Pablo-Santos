import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import {AiFillHeart} from 'react-icons/ai'

const TelaFotos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 24vw;
height: 70vh;
border: 1px solid invisible;

img{
    width: 100%;
    height: 60%;
}
`
const DivBotoes=styled.nav`
margin: 40px;

.botaoX{
margin-right:50px;
width: 50px;
height: 50px;
border-radius: 50%;
cursor:pointer;
font-size: 25px;
padding-bottom: 5px;
color: #f80032;
border:0.5px solid #f80032;
transition: 0.3s;
&:hover{
    background-color: #f80032;
    color: white;
   
}

}
.botaoOk{
width: 50px;
height: 50px;
border-radius: 50%;
cursor:pointer;
font-size: 25px;
padding-bottom: 5px;
padding-top:3px;
color:#27dfae;
border:0.5px solid #27dfae;
transition: 0.3s;

&:hover{
    background-color: #27dfae;
    color: white;
   
}




}

`









function TelaHome(props) {
    return (
        <TelaFotos>

            <img src={props.perfil.photo} />

            <DivBotoes>
                <button className="botaoX" onClick={props.postChoosePersonFalse} >x</button>
                <button className="botaoOk" onClick={props.postChoosePersonTrue} >♥</button>
            </DivBotoes>
            <div>
                <h2>{props.perfil.name}, {props.perfil.age}anos</h2>
                <p>{props.perfil.bio}</p>
            </div>

        </TelaFotos >
    )




}
export default TelaHome