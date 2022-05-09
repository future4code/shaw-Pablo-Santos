import React from "react"
import { ContainerSignup } from "./style"
import { ContainerForm } from "./style"
import { ContainerCheckbox } from "./style"
import {goToLoginPage} from "../../router/coodinator"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { postSignup } from "../../services/users"

const SignupPage = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })

    const onSubmit = (e) => {
        e.preventDefault()
        postSignup(form, clear, navigate)
    }

    return (

        <ContainerSignup>
            <h1>Signup Page</h1>

            <ContainerForm onSubmit={onSubmit}>
                <input placeholder="Nome"
                    type="text"
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                />

                <input placeholder="E-mail"
                    type="email"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                />

                <input placeholder="Senha"
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
                <button>Cadastrar</button>

            </ContainerForm>

            <button onClick={() => goToLoginPage(navigate)}>Voltar</button>
        </ContainerSignup>

    )
}
export default SignupPage