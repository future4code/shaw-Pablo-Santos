import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCart, goToFeed, goToProfile } from "../../Routes/coodinator";
import { OrderContainer, OrderContainerSpace, ClockStyled, BoxInform, TotalPrice, RestaurantName, Title } from './styled'




const Order = ({ totalPrice, restaurantName }) => {
    const navigate = useNavigate()
    return (
        <>
            <OrderContainer>
                <ClockStyled />
                <BoxInform>
                    <Title>
                        Pedido en Andamento
                    </Title>
                    <RestaurantName>{restaurantName}</RestaurantName>
                    <TotalPrice>
                        SUBTOTAL R${totalPrice.toFixed(2)}
                    </TotalPrice>
                </BoxInform>
            </OrderContainer>
            <OrderContainerSpace />

        </>
    )


}
export default Order