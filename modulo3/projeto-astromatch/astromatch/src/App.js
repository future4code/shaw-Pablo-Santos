import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TelaMatch from './components/TelaMatch';
import TelaHome from './components/TelaHome'
import styled from 'styled-components'
import { SiTinder } from 'react-icons/si';
import { ImList } from 'react-icons/im';



const ContainerHome = styled.main`
display:flex;
flex-direction: column;
align-items: center;


`
const NavHome = styled.nav`
display:flex;
justify-content: space-between;
background-image: linear-gradient(45deg,#fd267a,#ff6036);
height: 10vh;
width:24vw;
align-items: center;
.botaoLista{
 background-color: #ff5444;
  color: white;
  margin:10px;
  width: 40px;
  border: none;
  cursor:pointer;
  font-size:25px;
}
.botaoHome{
 background-color:#fd2b74;
  color: white;
  margin:10px;
  width: 40px;
  height: 20px;
  border: none;
  cursor:pointer;
  font-size:25px;
}
`
const Divh1 =styled.div`
position: absolute ;
left: 43.5%;
h1{
  color:white;
}

`


function App() {
  const [tela, setTela] = useState("TelaHome")
  const [perfil, setPerfil] = useState('')
  const [listaMatch, setListaMatch] = useState({})


  // Função para trocar de tela
  const escolherTela = () => {
    switch (tela) {
      case 'TelaHome':
        return <TelaHome perfil={perfil} postChoosePersonTrue={postChoosePersonTrue} postChoosePersonFalse={postChoosePersonFalse} />
      case 'TelaMatch':
        return <TelaMatch putClear={putClear} />
      default:
        return <div>"Erro, tente novamente!"</div>
    }
  }
  // Funcão para ir pra tela Home
  const onClickHome = () => {
    setTela('TelaHome')
  }

  // Função para ir para tela de matchs
  const onClickMatch = () => {
    setTela('TelaMatch')
  }

  //Requisição para escolher profile true
  const getProfileChoose = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:pablo/person"
    axios
      .get(url)
      .then((res) => {
        setPerfil(res.data.profile)
      })
      .catch((err) => {
        alert(err.data)
      })

  }
  useEffect(() => {

    getProfileChoose()

  }, [])

  //Requisição para escolher profile FALSE

  const postChoosePersonFalse = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"
    const headers = { "Content-Type": "application/json;charset=UTF-8" }
    const body = {

      id: perfil.id,
      choice: false,

    }

    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res)
        setListaMatch(res.data.match)
        getProfileChoose()
      })
      .catch((err) => {
        alert('Erro, tente novamente')
      })
  }

  // Requisição para escolha de Match TRUE

  const postChoosePersonTrue = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"
    const headers = { "Content-Type": "application/json;charset=UTF-8" }
    const body = {

      id: perfil.id,
      choice: true,

    }

    axios
      .post(url, body, headers)
      .then((res) => {
        setListaMatch(res.data.match)
        getProfileChoose()
      })
      .catch((err) => {
        alert('Error')
      })
  }
  // requisição para deletar matchs
  const putClear = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
    axios
      .put(url)
      .then((res) => {
        setListaMatch(res.data.profile)
      })
      .catch((err) => {
        alert("Erro ao tentar deletar lista")
      })


  }

  return (
    <ContainerHome>
      <NavHome>
        <div>
          {tela === 'TelaMatch' && (<button className="botaoHome"onClick={onClickHome}> <SiTinder /> </button>)}
        </div>
        <Divh1>
          <h1>AstroMatch</h1>
        </Divh1>
        <div>
          {tela === 'TelaHome' && (<button className="botaoLista"onClick={onClickMatch}> <ImList /> </button>)}
        </div>
      </NavHome>
      {escolherTela()}
    </ContainerHome >
  );
}

export default App;
