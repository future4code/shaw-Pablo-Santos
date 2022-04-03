import React from 'react'
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';



export default class MeuApp extends React.Component {

  state = {
    etapa: 1,
  }

  render() {
    let secao;
    renderizaEtapa = (secao) =>{
    switch (this.state.etapa) {
      case "Etapa1":
        secao = <Etapa1 />
        break;
      case "Etapa2":
        secao = <Etapa2 />
        break;
      case "Etapa3":
        secao = <Etapa3 />
        break; case "Final":
        secao = <Final />
        break;
      default:
        break;
    }
  }
    return (
      <>
        <button onClick={(this.props.target)}> Próxima etapa</button>
      </>
    );
  }
}

