import React from "react";
import { InputMaterial, Main, Form, ButtonStyled } from './styled'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../Constants/url'
import { useNavigate } from 'react-router-dom'
import { goToFeed } from "../../Routes/coodinator";
import Header from "../../Components/Header/Header";

const SignUpAdress = () => {

    const navigate = useNavigate()

    const { form, onChange, clean } = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": "",
    });

   

    const addAddress = async () => {
        const token = localStorage.getItem('token')
        await axios
            .put(`${BASE_URL}/address`, form, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                goToFeed(navigate)
            })
            .catch((err) => {
                alert(err.respose.data.message)
            })
    };
    
    const onSubmitFormAdress = (event) => {
        event.preventDefault()
        addAddress()
    }

    return (
        <Main>
            <Header back={'back'}/>
            <p>SignUpAdress</p>
            <Form onSubmit={onSubmitFormAdress}>
                <InputMaterial
                    id="outlined-basic"
                    label={"Logadouro"}
                    name="street"
                    type={"text"}
                    placeholder={"Rua / Avn."}
                    variant="outlined"
                    value={form.street}
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Numero"}
                    name="number"
                    type={"text"}
                    placeholder={"Número"}
                    variant="outlined"
                    value={form.number}
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Complemento"}
                    name="complement"
                    type={"text"}
                    placeholder={"Apto /Bloco."}
                    variant="outlined"
                    value={form.complement}
                    onChange={onChange}

                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Bairro"}
                    name="neighbourhood"
                    type={"text"}
                    placeholder={"Bairro"}
                    variant="outlined"
                    value={form.neighbourhood}
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Cidade"}
                    name="city"
                    type={"text"}
                    placeholder={"Cidade"}
                    variant="outlined"
                    value={form.city}
                    onChange={onChange}
                    required
                />
                <InputMaterial
                    id="outlined-basic"
                    label={"Estado"}
                    name="state"
                    type={"text"}
                    placeholder={"Estado"}
                    variant="outlined"
                    value={form.state}
                    onChange={onChange}
                    required
                />
                <ButtonStyled type="submit"> Entrar</ButtonStyled>
            </Form>
        </Main>

    )


}
export default SignUpAdress