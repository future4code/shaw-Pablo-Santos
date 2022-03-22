import React from 'react';
import styled from 'styled-components';

const ImageContainer =

function ImagemButton(props) {
    return (
        <ImageContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageContainer>

    )
}

export default ImagemButton;