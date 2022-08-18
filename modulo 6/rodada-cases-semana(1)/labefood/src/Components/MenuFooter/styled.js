import styled from 'styled-components'
import { ReactComponent as Homepage } from '../../Assets/homepage.svg'
import { ReactComponent as Avatar } from '../../Assets/avatar.svg'
import { ReactComponent as Cart } from '../../Assets/shopping-cart.svg'

export const MenuContainer = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
height: 3.062rem;
position: fixed;
bottom: 0;
width: 100%;
background-color: white;
border: 1px solid lightgray;
`
export const MenuContainerSpace = styled.div`
height: 3.062rem;
`
export const HomePageStyled = styled(Homepage)`
fill:${(p) => p.pageCurrent ? "red" : "#B8B8B8"};
`
export const AvatarStyled = styled(Avatar)`
fill:${(p) => p.pageCurrent ? "red" : "#B8B8B8"};


`
export const CartStyled = styled(Cart)`
fill:${(p) => p.pageCurrent ? "red" : "#B8B8B8"};

`