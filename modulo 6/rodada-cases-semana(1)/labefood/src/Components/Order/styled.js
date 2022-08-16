import styled from 'styled-components'
import { ReactComponent as Clock } from '../../Assets/clock.svg'

export const OrderContainer = styled.nav`
display: flex;
align-items: center;
height: 7.375rem;
position: fixed;
bottom: 3.062rem;
width: 100%;
background-color: red;
z-index:2;
padding-left: 2rem;
`
export const OrderContainerSpace = styled.div`
height: 3.062rem;
`
export const ClockStyled = styled(Clock)`

`
export const BoxInform = styled.div`


`
export const Title = styled.h3`
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #fff;
padding: 0.25rem;
`
export const RestaurantName = styled.p`
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
padding: 0.25rem;
`
export const TotalPrice = styled.p`
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
padding: 0.25rem;
`