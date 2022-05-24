import React from "react"
import { ContainerSignup } from "./style"
import { ContainerForm } from "./style"
import { ContainerCheckbox,Tittle,InputSignup,ButtonCadastrar} from "./style"
import {goToLoginPage} from "../../router/coodinator"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { postSignup } from "../../services/users"
import useUnprotectedPage from "../../hooks/useUnProtectedPage"

const SignupPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })

    const onSubmit = (e) => {
        e.preventDefault()
        postSignup(form, clear, navigate)
    }

    return (

        <ContainerSignup>
            <Tittle>Olá, boas vindas ao LabEddit ! </Tittle>

            <ContainerForm onSubmit={onSubmit}>
                <InputSignup placeholder="Nome"
                    type="text"
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                />

                <InputSignup placeholder="E-mail"
                    type="email"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                />

                <InputSignup placeholder="Senha"
                    type="password"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                />
                <ContainerCheckbox>
                    <input
                        type="checkbox"
                      
                       /><label>Eu concordo em receber emails sobre coisas legais no Labeddit.</label>
                </ContainerCheckbox>
                <ButtonCadastrar>Cadastrar</ButtonCadastrar>

            </ContainerForm>

        
        </ContainerSignup>

    )
}
export default SignupPage