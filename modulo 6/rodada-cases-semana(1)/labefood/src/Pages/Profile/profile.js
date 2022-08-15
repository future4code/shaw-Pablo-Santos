import React from "react";
import Header from "../../Components/Header/Header";
import MenuFooter from "../../Components/MenuFooter/MenuFooter";
import { Main, Perfil, Informacoes, PerfilPessoa, EnderecoPessoa, HistoriCompras } from './styled'
import { useRequestData } from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/url'
import useProtectedPage from '../../Hooks/useProtectedPage'
import { useNavigate } from "react-router-dom";
import { goToProfileEdit } from "../../Routes/coodinator"

const Profile = () => {
  useProtectedPage()
  const person = useRequestData({}, `${BASE_URL}/profile`)
  const navigate = useNavigate()

  return (
    <div>
      <Header tittle={'Meu perfil'} />
      <Main>
        <Informacoes>
          <PerfilPessoa>
            <div>
              <p>{person[0].user && person[0].user.name}</p>
              <p>{person[0].user && person[0].user.email}</p>
              <p>{person[0].user && person[0].user.cpf}</p>
            </div>
            <div onClick={() => goToProfileEdit(navigate, person[0].user.id)}>Editar</div>
          </PerfilPessoa>
          <EnderecoPessoa>
            <div>
              <h4>Endereço cadastrado</h4>
              <p>{person[0].user && person[0].user.address}</p>
            </div>
            <div>Editar</div>
          </EnderecoPessoa>
          <HistoriCompras>Historico de Compras</HistoriCompras>
        </Informacoes>
      </Main>
      <MenuFooter page={"profile"} />
    </div>

  )


}
export default Profile