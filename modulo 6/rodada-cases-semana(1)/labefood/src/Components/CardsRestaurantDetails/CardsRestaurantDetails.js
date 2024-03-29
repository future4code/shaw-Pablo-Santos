import { BoxInformTimePrice, ContainerCardsRestaurantDetails, ImageRestaurants, Inform, NameRestaurant } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToRestaurant } from '../../Routes/coodinator'

const CardsRestaurantDetails = ({ restaurant }) => {
    const navigate = useNavigate()
    return (
        <ContainerCardsRestaurantDetails>
            <ImageRestaurants src={restaurant.logoUrl} />
            <NameRestaurant>{restaurant.name}</NameRestaurant>
            <Inform>{restaurant.category}</Inform>
            <BoxInformTimePrice>
                <Inform>{restaurant.deliveryTime +"min, "}</Inform>
                <Inform>
                    Frete{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(restaurant.shipping)}
                </Inform>
            </BoxInformTimePrice>
            <Inform>{restaurant.address}</Inform>
        </ContainerCardsRestaurantDetails>
    )
}
export default CardsRestaurantDetails