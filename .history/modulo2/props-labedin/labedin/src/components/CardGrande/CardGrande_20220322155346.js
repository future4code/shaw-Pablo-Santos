import React from 'react';
import './CardGrande.css'
import styled from 'styled-components';

const BigCardContainer = styled.div`
  display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    img{
        width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    }
    h4{
        margin-bottom: 15px;
    }

`


function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;