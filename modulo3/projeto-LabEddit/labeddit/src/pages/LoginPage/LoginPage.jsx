import React from "react";
import {ContainerLogin,ContainerForm,ContainerSignup} from "./style"
import {goToSignupPage} from "../../router/coodinator"
import {useNavigate} from "react-router-dom" 
import useForm from "../../hooks/useForm";
import {postLogin} from "../../services/users"
import useUnprotectedPage from "../../hooks/useUnProtectedPage"


const LoginPage =()=>{
    useUnprotectedPage()
    const navigate = useNavigate()
    const [form, onChange, clear] =useForm({email:"", password:""})
    const onSubmit =(e)=>{
        e.preventDefault()
       postLogin(form, clear, navigate)  
    }
    return(

        <ContainerLogin>
        <h1>Login Page</h1>
        <ContainerForm onSubmit={onSubmit}>
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

            <button>Entrar</button>
        </ContainerForm>
        <ContainerSignup>
        <a onClick={()=>goToSignupPage(navigate)}>Ainda não tem uma conta? Criar Agora!</a>
        </ContainerSignup>
        </ContainerLogin>
    )
}
export default LoginPage