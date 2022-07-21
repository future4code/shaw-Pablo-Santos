import { BoxInformTimePrice, ContainerCardrestaurant, ImageRestaurants, InformTimePrice, NameRestaurant } from './styled'
import {useNavigate} from 'react-router-dom'
import {goToRestaurant} from '../../Routes/coodinator'

const CardsRestaurants = ({ restaurant }) => {
    const navigate =useNavigate()
    return (
        <ContainerCardrestaurant onClick={()=> goToRestaurant(navigate, restaurant.id)}>
            <ImageRestaurants src={restaurant.logoUrl} />
            <NameRestaurant>
                {restaurant.name}</NameRestaurant>
            <BoxInformTimePrice>
                <InformTimePrice>
                    {restaurant.deliveryTime}
                    </InformTimePrice>
                <InformTimePrice>
                    {restaurant.shipping}
                </InformTimePrice>
            </BoxInformTimePrice>


        </ContainerCardrestaurant>
    )
}
export default CardsRestaurants