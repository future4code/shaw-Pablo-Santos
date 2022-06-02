import React from "react";
import {Router} from './routes/Router'
import {ContainerFooter, ContainerHeader} from './style'
import logolabex from './images/labex-semfudo.png'


function App() {
  return (
    <div className="App">
      <ContainerHeader>
    <img src={logolabex} alt="logo labex"/>
      </ContainerHeader>
      
      <Router />
      
      <ContainerFooter>
      <p> ©️ Pablo Gomes - Shaw - Labenu</p>
      </ContainerFooter>
    </div>
  );
}

export default App;
