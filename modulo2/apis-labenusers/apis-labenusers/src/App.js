import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import CadastroUsuario from './components/Cadastro-usuario';
import ListaUsuario from './components/Lista-usuarios';



const headers = {
  headers: {
    Authorization: "pablo-gomes-shaw"
  }
}
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class App extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
    telaAtual: "cadastro"
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <CadastroUsuario 
        
        InputName={this.state.inputName}
        inputEmail={this.state.inputEmail}
        onChangeName={this.onChangeName}
        onChangeEmail={this.onChangeEmail}
        postCreateUser={this.postCreateUser}
        onClickLista={this.onClickLista}
        />
      case "lista":
        return <ListaUsuario onClickCadastro={this.onClickCadastro}/>
      default: 
        return "cadastro"
    }
  }
  onClickCadastro = () => {
    this.setState({
      telaAtual: "cadastro"
    })
  }
  onClickLista = () => {
    this.setState({
      telaAtual: "lista"
    })
  }


  postCreateUser = () => {

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    axios
      .post(url, body, headers)
      .then((response) => {

       alert("Cadastrado(a) com sucesso!")
        this.setState({
          inputName: "",
          inputEmail: "",
        })
      })
      .catch((error) => {
        alert("Erro ao cadastrar, tente novamente!")
      })
  };

  onChangeName = (event) => {
    this.setState({
      inputName: event.target.value
    })
  }
  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    })
  }


  render() {
    return (
      <div>

       {this.escolheTela()}
       
     
      </div>

    )







  }
}

