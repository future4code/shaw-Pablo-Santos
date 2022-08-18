import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { InputMaterial, Main, Form, ButtonStyled } from './styled'
import useForm from '../../Hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../Constants/url'
import { useNavigate } from 'react-router-dom'
import { goToProfile } from "../../Routes/coodinator";


const AdressEdit = () => {

  const navigate = useNavigate()

  const { form, onChange, clean, setForm } = useForm({
    "street": "",
    "number": "",
    "neighbourhood": "",
    "city": "",
    "state": "",
    "complement": "",
  });

  const getAdress = async () => {
    await axios
      .get(`${BASE_URL}/profile/address`, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      })
      .then((res) => {
        setForm(
          {
            "street": res.data.address.street,
            "number": res.data.address.number,
            "neighbourhood": res.data.address.neighbourhood,
            "city": res.data.address.city,
            "state": res.data.address.state,
            "complement": res.data.address.complement,
          }
        )
      })
      .catch((err) => {
        console.log(err.respose)
      })
  };

  useEffect(() => {
    getAdress()
  }, [])




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
        alert('Dados alterados com sucesso!')
        goToProfile(navigate)
      })
      .catch((err) => {
        alert(err.respose.data.message)
      })
  };



  const onSubmitFormAdress = (e) => {
    e.preventDefault()
    addAddress()
  }

  return (
    <Main>
      <Header back={'back'} tittle={'Alterar endereço'} />
      <Form onSubmit={onSubmitFormAdress}>
        <InputMaterial
          id="outlined-basic"

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

          name="complement"
          type={"text"}
          placeholder={"Apto /Bloco."}
          variant="outlined"
          value={form.complement}
          onChange={onChange}

        />
        <InputMaterial
          id="outlined-basic"

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

          name="state"
          type={"text"}
          placeholder={"Estado"}
          variant="outlined"
          value={form.state}
          onChange={onChange}
          required
        />
        <ButtonStyled type="submit"> Salvar</ButtonStyled>
      </Form>
    </Main>
  )


}
export default AdressEdit