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
const novaMesagens ={
  usuario: this.state.novoUsuario,
  texto:this.state.novoTexto
  }
const novaListaDeMensagem = [novaMesagens,...this.state.mensagens]
this.setState({mensagens:novaListaDeMensagem})

this.setState({novoUsuario:''})
this.setState({novoTexto:''})


}


  return (
    <AppContainer>
      <MensagemContainer>
      {this.state.mensagens.map((mensagens)=>{
        <Card>
          <h3>{mensagens.user}</h3>
          <p>{mensagens.text}</p>
        </Card>


      })}


      </MensagemContainer>
      <InputContainer>
        <InputUsuario
        onChange={this.onChangeNovoUsuario}
        value={this.state.novoUsuario}
        placeholder='Usuario'
        />
        
        <InputMensagem
        onChange={this.onChangeNovotexto}
        value={this.state.novoTexto}
        placeholder={'Mensagem'}
        
        />
        <button onClick={this.sendMesssage}>Enviar</button>        
      
      </InputContainer>
      </AppContainer>
  );
}
}
