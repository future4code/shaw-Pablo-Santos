import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Lista from './components/Lista'
import TodasAsPlayLists from './components/TodasAsPlayLists'
import { headers } from './components/Lista'




export default class App extends React.Component {
  state = {
    telaAtual: "inserirplaylits"

  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "inserirPlayLists":
        return <Lista/>
      
      case "todasAsPlayLists":
        return <TodasAsPlayLists/>
    
        default :
        return <div>Carregando</div>
    }

  }

 onClickTelaInserirPlayList = () =>{
this.setState({
  telaAtual: "inserirPlayLists"
})
 }
onClickTelaTodasAsListas =()=>{
 this.setState({telaAtual: "todasAsPlayLists"}) 
}

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onClickTelaInserirPlayList}>Lista</button>
          <button onClick={this.onClickTelaTodasAsListas}>Todas as playlists</button>
        </div>
        <div>
          {this.escolherTela()}
        </div>
      </div>
    );

  }
}
