import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';

const TelaFotos =styled.div`
width:270px;
height: 500px;
border-radius: 5px;
border: 1em solid black;

img{
    width: 100%;
    height: 60%;
}
`








function TelaHome(props){
    return(
        <TelaFotos>
        
     <img src={props.perfil.photo}/>
     
      <div>
        <button onClick={props.postChoosePersonFalse} >x</button>
        <button onClick={props.postChoosePersonTrue} >♥</button>
        <h2>{props.perfil.name}, {props.perfil.age}anos</h2>
        <p>{props.perfil.bio}</p>
      </div>
    
        </TelaFotos>
    )

    


}
export default TelaHome