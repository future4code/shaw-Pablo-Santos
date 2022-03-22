import React from "react";
import './CardPequeno.css'

function CardPequeno(props){
    return(
    <div className='littlecard-container'>
        <img src={props.imagem} />
       <h4>{props.descricao}</h4>
        <p>{props.mensagem}</p>
    </div>

    )

}