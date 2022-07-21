import React, { useState } from "react";
import axios from 'axios'
import { BASE_URL } from "../../Constants/url";
import { Main, Form, ButtonStyled, DivPassword, InputMaterial } from "./styled";
import { IconButton} from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { goToFeed } from "../../Routes/coodinator"
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowpassword] = useState(true)
    const [errEmail, setErrEmail] = useState('')
    const [errPass, setErrPass] = useState('')
    const [checkErrEmail, setCheckErrEmail] = useState(false)
    const [checkErrPass, setCheckErrPass] = useState(false)

    const navigate = useNavigate()

    const handleClickShowPassword = () => {
        setShowpassword(!showPassword)
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()
        const userLogin = {
            email,
            password,
        }
        loginApi(userLogin)
    }

    const loginApi = async (body) => {
        await axios
            .post(`${BASE_URL}/login`, body)
            .then((res) => {
                setEmail('')
                setPassword('')
                setErrEmail('')
                setErrPass('')
                setCheckErrEmail(false)
                setCheckErrPass(false)
                localStorage.setItem("token", res.data.token)
                goToFeed(navigate)
            })
            .catch((err) => {
                console.log(err)
                if (err.response.data.message.includes("Senha incorreta")) {
                    setErrPass(err.response.data.message)
                    setCheckErrPass(true)

                } else {
                    setErrEmail(err.response.data.message)
                    setCheckErrEmail(true)
                }

            })
    }

    return (
        <Main>
            <p>Entrar</p>
            <Form onSubmit={onSubmitLogin}>
                <InputMaterial
                    error={checkErrEmail}
                    helperText={checkErrEmail ? errEmail : ""}
                    id="outlined-basic"
                    label="E-mail"
                    type={'email'}
                    variant="outlined"
                    placeholder={'email@email.com'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <DivPassword>
                    <InputMaterial
                        error={checkErrPass}
                        helperText={checkErrPass ? errPass : ""}
                        id="outlined-basic"
                        label="Password"
                        type={showPassword ? 'password' : 'text'}
                        variant="outlined"
                        placeholder={'Minimo 6 caracteres'}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres" }}
                        required
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}

                    </IconButton>
                </DivPassword>
                <ButtonStyled type="submit"> Entrar</ButtonStyled>
            </Form>

        </Main>


    )
}
export default Login