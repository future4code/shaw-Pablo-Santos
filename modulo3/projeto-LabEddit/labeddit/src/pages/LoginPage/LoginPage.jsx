import React from "react";
import {ContainerLogin,Tittle,ContainerForm,InputLogin,ButtonLogin,ContainerSignup} from "./style"
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBB9nz-FPRMLqAQCD46nbhHqfE1T2-T93sg&usqp=CAU" alt="Logo LabEddit" />
        <Tittle>LabEddit</Tittle>
        <ContainerForm onSubmit={onSubmit}>
            <InputLogin placeholder="E-mail"
            type="email"
            name={"email"}
            value={form.email}
            onChange={onChange}
             />
            <InputLogin placeholder="Senha"
            type="password"
            name={"password"}
            value={form.password}
            onChange={onChange}
            />

            <ButtonLogin>Entrar</ButtonLogin>
        </ContainerForm>
        <ContainerSignup>
        <a>Ainda não tem uma conta?<span onClick={()=>goToSignupPage(navigate)}>Criar Agora!</span></a>
        </ContainerSignup>
        </ContainerLogin>
    )
}
export default LoginPage