import React, { useState } from "react";
import useForm from '../../Hooks/useForm'
import { ButtonStyled, InputMaterial, Main,Form, PassDiv } from "./styled";
import { IconButton } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import {BASE_URL} from '../../Constants/url'
import {useNavigate} from 'react-router-dom'
import {goToSignUpAdress} from '../../Routes/coodinator'
import Header from '../../Components/Header/Header'

const SignUp = () => {
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [showCheckPass, setShowCheckPass] = useState(false)
    const [checkErrPass, setCheckErrPass] = useState(false)

    const navigate = useNavigate()


    const handleClickShowPassword = () => {
        setShowPass(!showPass)
    }
    const handleClickShowCheckPassword = () => {
        setShowCheckPass(!showCheckPass)
    }


    const { form, onChange, clean } = useForm({
        "name": "",
        "email": "",
        "cpf": "",
        "password": "",
    });

    const signUpPerson = async () => {
        await axios
            .post(`${BASE_URL}/signup`, form)
            .then((res) => {

                localStorage.setItem('token', res.data.token)
                goToSignUpAdress(navigate)
            })
            .catch((err)=>{
                alert(err.response.data.message)
                clean()
                setConfirmPassword('')
            })
    };


    const onSubmitForm = (event) => {
        event.preventDefault()
        
        if (form.password !== confirmPassword) {
            setCheckErrPass(true)
        } else {
            setCheckErrPass(false)
            signUpPerson()
        }
        
        
    };
    

    const cpfMask = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1")

    };

    return (
        <Main>
        <Header back={'back'} tittle={'Cadastrar'} />
            <Form onSubmit={onSubmitForm}>
                <InputMaterial
                    id="outlined-basic"
                    label={"Nome"}
                    name="name"
                    type={"text"}
                    placeholder={"Digite seu nome"}
                    variant="outlined"
                    value={form.name}
                    onChange={onChange}
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Email"}
                    name="email"
                    type={"email"}
                    placeholder={"email@email.com"}
                    variant="outlined"
                    value={form.email}
                    onChange={onChange}
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Cpf"}
                    name="cpf"
                    type={"text"}
                    placeholder={"Digite seu cpf"}
                    variant="outlined"
                    value={cpfMask(form.cpf)}
                    onChange={onChange}
                />
                <PassDiv>
                    <InputMaterial
                        id="outlined-adorment-password"
                        label={"Password"}
                        name='password'
                        type={showPass ? 'password' : 'text'}
                        placeholder={'Minimo 6 caracteres'}
                        value={form.password}
                        onChange={onChange}
                        inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres" }}
                        required
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                    >
                        {showPass ? <VisibilityOff /> : <Visibility />}

                    </IconButton>
                </PassDiv>
                <PassDiv>
                    <InputMaterial
                        error={checkErrPass}
                        helperText={checkErrPass ? 'As senhas devem ser identicas' : ""}
                        id="outlined-adorment-password"
                        label={"Confirmar"}
                        name='password'
                        type={showCheckPass ? 'password' : 'text'}
                        placeholder={'Minimo 6 caracteres'}
                        inputProps={{ minLength: 6, title: "A senha deve conter no mínimo 6 caracteres" }}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCheckPassword}
                        edge="end"
                    >
                        {showCheckPass ? <VisibilityOff /> : <Visibility />}

                    </IconButton>
                </PassDiv>
                <ButtonStyled type="submit">Cadastrar</ButtonStyled>
            </Form>
        
        </Main>

    )


}
export default SignUp