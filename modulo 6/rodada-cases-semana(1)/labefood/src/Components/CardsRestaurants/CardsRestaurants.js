import { BoxInformTimePrice, ContainerCardrestaurant, ImageRestaurants, InformTimePrice, NameRestaurant } from './styled'


const CardsRestaurants = ({ restaurant }) => {
    return (
        <ContainerCardrestaurant>
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