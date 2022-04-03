import React from "react";
import styled from "styled-components";
const LittleCardContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;
`

function CardPequeno(props){
    return(
    <div className='littlecard-container'>
        <img src={props.imagem} />
       <h4>{props.descricao}</h4>
        <p>{props.mensagem}</p>
    </div>
    )

}
export default CardPequeno;