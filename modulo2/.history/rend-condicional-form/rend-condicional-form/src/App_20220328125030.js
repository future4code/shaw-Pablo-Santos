import React from 'react'
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
export default class MeuApp extends React.Component {



  render() {
    return (
      <>
    <Etapa1/>
    <Etapa2/>
    <Etapa3/>
    
      </>
    );
  }
}

