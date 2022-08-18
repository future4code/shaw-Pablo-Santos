import React from "react";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Routes/Router"
import GlobalState from "./Global/GlobalState"


function App() {
  return (
    <div>
      <GlobalStyled/>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
