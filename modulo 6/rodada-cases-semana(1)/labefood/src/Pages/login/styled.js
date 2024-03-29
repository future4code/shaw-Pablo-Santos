import styled from "styled-components";
import { Button, TextField} from "@mui/material";

export const InputMaterial =styled(TextField)`
width: 100%;
p{
    font-size: 0.6rem;

}

`


export const Main=styled.div`
padding: 10px;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

p{
    font-size: 1rem;

}
a{
    text-decoration: underline;
}
`;
export const Logo=styled.img`
margin-top: 5rem;
width: 8rem;
`
export const Entrar =styled.p`

margin-top: 2rem;
`
export const Form =styled.form`
display: flex;
flex-direction: column;
height: 30%;
width: 80%;
justify-content: space-evenly;
margin-bottom: 2rem;
`
export const ButtonStyled=styled(Button)`
&&{
color:#000;
background-color: #E8222E;
width: 100%;
}
`

export const DivPassword =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
