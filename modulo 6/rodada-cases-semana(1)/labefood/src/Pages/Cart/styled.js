import styled from 'styled-components'
import { Button, TextField} from "@mui/material";

export const Main = styled.main`
display: flex;
height: auto;
flex-direction: column;

`
export const MainCart = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 5%;
font-size: 2rem;
`
export const CartConfig = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 95%;
justify-content: space-between;
margin-bottom: 1rem;
`
export const InfoProfile = styled.div`
height:5rem;
display: flex;
flex-direction: column;
padding-left:1rem;
justify-content: center;
font-size:  1rem;
background-color: lightgray;
width: 100%;
`
export const InfoRestaurant = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-size: 1rem;
margin: 10px;
padding: 0 1rem 0 1rem;
p:nth-child(1){
    color: red;
}
`
export const CartInfo = styled.div`
margin-top:  10px;
display: flex;
flex-direction: column;
width: 100%;
padding: 0 1rem 0 1rem;
`
export const EmptyCart = styled.div`
font-size: 1rem;
text-align: center;
padding: 0 1rem 0 1rem;
margin-bottom: 1rem;
`
export const Payment = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
padding: 0 1rem 0 1rem;
p,label{
    font-size: 1rem;
}
`
export const Freight = styled.div`
display: flex;
justify-content: flex-end;
margin: 5px;

`
export const Total = styled.div`
display: flex;
justify-content:space-between;
margin:1rem 0 1rem 0;
p:nth-child(2){
    color: red;
    font-size: 1rem;
}

`
export const Form = styled.form`
display: flex;
flex-direction: column;
height: 10rem;
justify-content: space-evenly;
margin-top: 1rem;
div{
margin:5px;
}
label{
    font-size: 1rem;
    text-transform: uppercase;
}
input{
    height: 20px;
    width: 20%;
}

`
export const ButtonStyled=styled(Button)`
&&{
color:#000;
background-color: #E8222E;
width: 100%;
}
`
export const SpaceFooter = styled.div`
height:3.000rem;
`
