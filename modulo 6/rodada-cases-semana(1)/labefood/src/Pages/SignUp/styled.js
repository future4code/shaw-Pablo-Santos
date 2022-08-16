import styled from "styled-components";
import { Button, TextField} from "@mui/material";


export const InputMaterial =styled(TextField)`
width: 100%;
p{
    font-size: 0.6rem;
}

`


export const Main=styled.div`
height: 100vh;
width: 100%;
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
justify-content: space-between;
height: 100%;
width: 80%;
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

export const DivPassword =styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
