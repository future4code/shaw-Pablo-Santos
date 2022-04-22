import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const Nav =styled.nav`
margin:10px;


`
const ListaMatches = styled.main`
 overflow-y: scroll;
 width: 400px;
 height: 500px;
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