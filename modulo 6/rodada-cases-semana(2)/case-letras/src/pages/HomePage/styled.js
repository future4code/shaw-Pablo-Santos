import styled from "styled-components"
import Background from "../../assets/sky-background.svg"

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100vh;
background-image:url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 1.5rem;
`
export const ContainerSearch = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
height: 100%;
background: transparent;
`
export const Tittle = styled.h1`
font-family: 'Montserrat', sans-serif;
font-size: 1.6rem;
font-weight:600;
color:#FFFFFF;
background: transparent;
letter-spacing: 3px;
text-align: center;
width:20rem;
@media (min-width:769px) {
    width: 60%;
    font-size:2.9rem;
}

`
export const Select = styled.input`
font-family: 'Montserrat', sans-serif;
color:#6AA2D1;
background:rgba(255,255,255, 0.5);
border-radius: 7px;
width: 100%;
height: 2.5rem;
border: none;
padding-left: 10px;
margin-top: 1rem;
&&::placeholder{
    color:#6AA2D1;
}
@media (min-width: 769px) {
 width: 50%;
}
`