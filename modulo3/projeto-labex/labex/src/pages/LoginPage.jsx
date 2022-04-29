import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { goToBack } from '../routes/coodinator'
import { goToAdminHomePage } from '../routes/coodinator'


const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
min-height: 74vh;
align-items: center;
h1{
    margin: 1em;
    color: #011d41;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:25%;
    
input{
margin-top:5px;
border-radius: 2px;
border:0.3px solid grey;
padding-left:5px;
}
 
`
const ContainerBotao = styled.div`
margin-top: 2em;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
button{
   margin: 5px;
   width: 7vw;
    height: 6vh;
    border-radius: 3px;
    border:none;
    margin:3px;
    background-color:#5180bf;
    color: white;
    cursor: pointer;
    transition:0.3s;
    &:hover{
        box-shadow: 10px 5px 5px #9cb8dd;
    }
    &:active{
        color: #011d41;
    }
}

`



export const LoginPage = () => {
    //const navigate para troca de paginas
    const navigate = useNavigate()
    //estados para email e senha
    const [emails, setEmails] = useState('')
    const [passwords, setPasswords] = useState('')
    //requisição para autorizar email e senha

    const onSubmitLogin = () => {
       
        
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-gomes-shaw/login";
        const body = {
            email: emails,
            password: passwords,
        }
      
        axios
            .post(url, body)
            .then((res) => {
               localStorage.setItem('token', res.data.token) // local onde guardamos as informaçoes que vem do login
                goToAdminHomePage(navigate)
            })
            .catch((err) => {
                alert('E-mail ou senha invalido')
            })

    }


    return (
        <ContainerLogin>
            <h1>Login</h1>
            <form >
            <input type="email" placeholder="E-mail" onChange={(e) => setEmails(e.target.value)} />
            <input type="password" placeholder="Senha" onChange={(e) => setPasswords(e.target.value)} />
            </form>
            <ContainerBotao>
            <button onClick={() => goToBack(navigate)}>Voltar</button>
            <button onClick={onSubmitLogin}>Entrar</button>
            </ContainerBotao>   
        </ContainerLogin>
    )


}
