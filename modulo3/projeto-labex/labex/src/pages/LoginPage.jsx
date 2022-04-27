import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { goToBack } from '../routes/coodinator'
import { goToAdminHomePage } from '../routes/coodinator'




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
        <>
            Pagina de Login
            <input type="email" placeholder="E-mail" onChange={(e) => setEmails(e.target.value)} />
            <input type="password" placeholder="Senha" onChange={(e) => setPasswords(e.target.value)} />
            <button onClick={onSubmitLogin}>Entrar</button>
            <button onClick={() => goToBack(navigate)}>Voltar</button>

        </>
    )


}
