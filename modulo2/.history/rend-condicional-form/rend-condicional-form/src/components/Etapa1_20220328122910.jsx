import React from "react";
import styled from 'styled-components'





export default class Etapa1 extends React.Component{


    render(){
        return(
            <>
            <h1> Etapa 1 -Dados Gerais</h1>
            <input />
            <h2>1. Qual seu nome?</h2>
            <input />
            <h2>2. Qual sua Idade</h2>
            <input />
            <h2>Qual seu e-mail?</h2>
            <input/>
            <h2>Qual a sua escolaridade</h2>
            <select name="">
                <option value="">Ensino medio completo</option>
                <option value="">Superior completo</option>
            </select>
            </>

        )
    }
}