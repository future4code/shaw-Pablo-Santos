import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCart, goToFeed, goToProfile } from "../../Routes/coodinator";
import { MenuContainer, HomePageStyled, AvatarStyled, CartStyled,MenuContainerSpace } from './styled'



const Order = ({page}) => {
const navigate = useNavigate()
    return (
        <>
            <MenuContainer>
                <HomePageStyled pageCurrent={page === "feed"} onClick={()=> goToFeed(navigate)} />
                <CartStyled pageCurrent={page === "cart" } onClick={()=> goToCart(navigate)}/>
                <AvatarStyled pageCurrent={page === "profile"} onClick={()=> goToProfile(navigate)} />
            </MenuContainer>
            <MenuContainerSpace>
            </MenuContainerSpace>
        </>
    )


}
export default Order