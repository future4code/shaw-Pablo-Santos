import React from 'react';
import './styled.js';
import{ AppContainer,
  MensagemContainer,
  Card,
  InputContainer,
  InputUsuario,
  InputMensagem} from './styled'

export default class App extends React.Component {
  render(){

    state = {
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

    sendMensage = () =>{
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
        return(
        <Card>
          <h3>{mensagens.usuario}</h3>
          <p>{mensagens.texto}</p>
        </Card>
        )

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
