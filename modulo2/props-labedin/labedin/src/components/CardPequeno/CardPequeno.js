import React from "react";
import styled from "styled-components";
const LittleCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 350px;
img{
width: 30px
}

`

function CardPequeno(props){
    return(
    <LittleCardContainer>
        <img src={props.imagem} />
       <h4>{props.descricao}</h4>
        <p>{props.mensagem}</p>
    </LittleCardContainer>
    )

}
export default CardPequeno;