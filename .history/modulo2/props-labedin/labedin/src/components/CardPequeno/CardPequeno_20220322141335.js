import React from "react";
import './CardPequeno.css'

function CardPequeno(props){
    return(
    <div >
        <img src={props.imagem} />
        <p>{props.mensagem}</p>
    </div>

    )

}