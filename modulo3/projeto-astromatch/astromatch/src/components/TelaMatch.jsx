import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'



const Nav = styled.nav`
margin:15px;

button{
height: 30px;
width: 19vw;
cursor: pointer;
border-radius: 5px;
border: grey;
font-size: 13px;
transition: 0.3s;
background-image: linear-gradient(45deg,#fd267a,#ff6036);
transition: background-image 1s;
color: white;

&:hover,:focus{
  font-size: 15px;
  width: 20vw;
  height: 35px;
  background-image: linear-gradient(45deg,#ff6036,#fd267a);
}
&:active{
    color:black;
}

`

const ListaMatches = styled.main`
 overflow-y: scroll;
 width: 24vw;
 height: 70vh;
.containerMatch{
    margin: 5px;
    display: flex;
   align-items: center;
  
}
img{
    border-radius:50%;
    width:50px;
    height: 50px;
    margin: 3px;
} 

`





function TelaMatch(props) {

    const [matches, setMatches] = useState([])

    //Funçao para pegar todos os matchs
    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
        axios
            .get(url)
            .then((res) => {

                setMatches(res.data.matches)
            })
            .catch((err) => {
                alert("Error!")
            })
    }


    useEffect(() => {
        getMatches()
    }, [props.putClear])

    const reederizarLista = matches.map((perfil) => {
        return <div className="containerMatch" key={perfil.id}>
            <img src={perfil.photo} />
            <p>{perfil.name}</p>

        </div>
    })

    return (
        <>
            <Nav>

                <button onClick={props.putClear}>Apagar todos os Matchs</button>

            </Nav>

            <ListaMatches>

                {reederizarLista}

            </ListaMatches>
        </>
    )

}
export default TelaMatch