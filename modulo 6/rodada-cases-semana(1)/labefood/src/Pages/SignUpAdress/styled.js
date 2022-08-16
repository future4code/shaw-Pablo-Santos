import styled from 'styled-components'
import { Button, TextField} from "@mui/material";


export const InputMaterial =styled(TextField)`
width: 100%;
`
export const Main=styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 1rem;
}
`;
export const Form =styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height:100%;
width: 90%;

`
export const PassDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
p{
    font-size: 1rem;
}
`
export const ButtonStyled=styled(Button)`
&&{
color:#000;
background-color: #E8222E;
width: 100%;
}
`