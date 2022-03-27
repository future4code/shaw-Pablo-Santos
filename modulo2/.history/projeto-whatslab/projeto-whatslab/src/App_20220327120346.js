import React from 'react';
import './App.css';

export default class App extends React.Component() {
  render(){

    state={
      mensagens: [{
        usuario:'Pablo',
        texto:'Olá'
      }
     ,
     {
      usuario: 'Will',
      texto:'Fala cahorro!'
     }
    ],

      novoUsuario:'',
      novoTexto:''

    }
    onChangeNovoUsuario= (event) =>{
      this.setState({novoUsuario:event.target.value})
    }
    onChangeNovotexto= (event) =>{
      this.setState({novoTexto:event.target.value})
    }

    sendMesssage = () =>{
const newMessagens ={
  usuario: this.state.novoUsuario,
  texto:this.state.novoTexto
  }
}


  return (
    <AppContainer>
      <MensagemContainer>
      
      </MensagemContainer>
      <InputContainer>
        <InputUsuario
        onChange={}
        value={}
        placeholder={}
        />
        
        <InputMensagem
        onChange={}
        value={}
        placeholder={}
        
        />
        <button onClick={}>Enviar</button>        
      
      </InputContainer>
      </AppContainer>
  );
}
}
