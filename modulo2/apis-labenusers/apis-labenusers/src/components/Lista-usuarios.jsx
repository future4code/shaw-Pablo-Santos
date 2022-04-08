import React, { useReducer } from "react";
import styled from 'styled-components'
import axios from 'axios'

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;

`

const headers = {
    headers: {
        Authorization: "pablo-gomes-shaw"
    }
}

export default class ListaUsuario extends React.Component {
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, headers)
            .then((res) => {

                this.setState({
                    usuarios: res.data
                })

            })
            .catch((err) => {
                alert("Erro, tente novamente!")
            })

    }

    delDeleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, headers)
            .then((res) => {
               alert("Usuario(a) deletado(a) com sucesso")
               this.getAllUsers()
            })
            .catch((err) => {
               alert("Ocorreu um erro, tente novamente !")
            })


    }

    render() {
        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return <CardUsuario key={usuario.id}>{usuario.name}
                <button onClick={()=>{this.delDeleteUser(usuario.id)}}>X</button>
            </CardUsuario>
        })


        return (
            <div>


                <button onClick={this.props.onClickCadastro}>Trocar Tela</button>
                <h3>Lista de Usuarios</h3>
                <input type="text"
                    value=""
                    placeholder="Nome exato para busca"
                />
                {listaUsuarios}



            </div>
        )

    }






}