import React from "react";
import styled from 'styled-components'
import axios from 'axios'



export default class CadastroUsuario extends React.Component {




    render() {
        return (

            <div>
                 <button onClick={this.props.onClickLista}>Trocar Tela</button>
                 <h3>Cadastro de usuário</h3>
                <input type="text"
                    value={this.props.inputName}
                    placeholder="Nome"
                    onChange={this.props.onChangeName}
                />
                <input type="text"
                    value={this.props.inputEmail}
                    placeholder="E-mail"
                    onChange={this.props.onChangeEmail}
                />
                <button onClick={this.props.postCreateUser}>Cadastrar</button>
            </div>

        )

    }






}
