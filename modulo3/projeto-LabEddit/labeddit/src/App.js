import React, {useState}from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router"
import { Header } from "./components/Header/Header";

function App() {
  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")


  return (
    <div>
      <BrowserRouter>
        <Header 
        rightButtonText={rightButtonText} 
        setRightButtonText={setRightButtonText}/>
        <Router
        rightButtonText={rightButtonText} 
        setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </div>
  );
}

export default App;
