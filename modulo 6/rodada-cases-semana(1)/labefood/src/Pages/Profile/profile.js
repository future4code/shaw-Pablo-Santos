import React from "react";
import Header from "../../Components/Header/Header";
import MenuFooter from "../../Components/MenuFooter/MenuFooter";
import { Main, Perfil, Informacoes, PerfilPessoa, EnderecoPessoa, HistoriCompras } from './styled'
import { useRequestData } from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/url'
import useProtectedPage from '../../Hooks/useProtectedPage'
import { useNavigate } from "react-router-dom";
import { goToProfileEdit, goToAdressEdit } from "../../Routes/coodinator"
import CardOrderHistory from "../../Components/CardOrderHistory/CardOrderHistory";

const Profile = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const person = useRequestData({}, `${BASE_URL}/profile`)
  const order = useRequestData({}, `${BASE_URL}/orders/history`)

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
            <div onClick={() => goToAdressEdit(navigate, person[0].user.id)}>Editar</div>
          </EnderecoPessoa>
          <HistoriCompras>
            <p>Historico de Compra</p>
            {order[0].orders && order[0].orders.length > 0 ? order[0].orders && order[0].orders.map((order) => {
              return (
                <CardOrderHistory
                  restaurantName={order.restaurantName}
                  totalPrice={order.totalPrice}
                  createdAt={order.createdAt}
                />
              )
            }) : <p>Voce nao realizou nenhum pedido</p>}
          </HistoriCompras>

        </Informacoes>
        <MenuFooter page={"profile"} />
      </Main>
    
    </div>

  )


}
export default Profile