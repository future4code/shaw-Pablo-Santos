import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CriarPlayList from './components/CriarPlayList'
import TodasAsPlayLists from './components/TodasAsPlayLists'

const ContainerLabefy =styled.body`
display: flex;
height: 100vh;
margin: 0 auto;
padding: 0;

`
const ContainerBotoes =styled.header`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
flex-direction: column;
width: 35%;

background-color: #000;
h1{
  color: white;
  position: relative;
  top:-10%;
}
span{
  color:hsl(0deg 100% 50%);
}
button{
  
  cursor: pointer;
  width: 60%;
  height: 40px;
  margin: 54px;
  border-radius:4px;
  border: none;
  font-size: 18px;
  transition:0.2s;
  &:hover{
    background-color: hsl(0deg 100% 50%);
    color:white;
  }
}
`
const ContainerMain =styled.main`
background-color:#1e1e1e;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`



export const headers = {
  headers: {
      Authorization: "pablo-gomes-shaw"
  }
}
export default class App extends React.Component {
  state = {
    telaAtual: "criarPlayList"

  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "criarPlayList":
        return <CriarPlayList />

      case "todasAsPlayLists":
        return <TodasAsPlayLists />

      case "adicionarMusica":
        return 
      default:
        return <div>Carregando...</div>
    }

  }

  onClickTelaInserirPlayList = () => {
    this.setState({
      telaAtual: "criarPlayList"
    })
  }
  onClickTelaTodasAsListas = () => {
    this.setState({
      telaAtual: "todasAsPlayLists"
    })
  }
  onClickAdicionarMusica = () => {
    this.setState({
      telaAtual: "adicionarMusica"
    })
  }

  render() {
    return (
      <ContainerLabefy>
        <ContainerBotoes>
          <h1>Lab<span>efy '</span></h1>
          <button onClick={this.onClickTelaInserirPlayList}>Criar playlist</button>
          <button onClick={this.onClickTelaTodasAsListas}>Todas as playlists</button>
        </ContainerBotoes>
        <ContainerMain>
          {this.escolherTela()}
        </ContainerMain>
      </ContainerLabefy>
    );

  }
}
