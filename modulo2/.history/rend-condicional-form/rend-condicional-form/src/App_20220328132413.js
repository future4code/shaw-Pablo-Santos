import React from 'react'
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
export default class MeuApp extends React.Component {



  render() {
    return (
      <>
          <button onClick={(this.props.target)}> Próxima etapa</button>
      </>
    );
  }
}

