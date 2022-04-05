import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
import CadastroUsuario from './components/Cadastro-usuario';
import './App.css';



const headers = {
  headers: {
    Authorization: "pablo-gomes-shaw"
  }
}
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class App extends React.Component {
  state = {
    inputName:"",
    inputEmail:""
  }

  componentDidMount(){

    

  }

  postCreateUser = () => {

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    axios
      .post(url,body, headers)
      .then((response) => {
  
        console.log(response)
        this.setState({
          inputName:"",
          inputEmail:"",
        })
      })
      .catch((error) => {
        console.log(error)
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
      
        <button onClick={""}>Trocar Tela</button>
{console.log(this.state.inputEmail)}
        <CadastroUsuario
          InputName={this.state.inputName}
          inputEmail={this.state.inputEmail}
          onChangeName={this.onChangeName}
          onChangeEmail={this.onChangeEmail}
          postCreateUser={this.postCreateUser}
        />

      </div>

    )







  }
}

