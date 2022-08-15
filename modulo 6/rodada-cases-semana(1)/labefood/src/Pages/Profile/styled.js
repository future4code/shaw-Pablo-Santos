import styled from "styled-components";

export const Main = styled.div`
height: 100vh;
display: flex;
flex-direction: column;

`
export const Perfil = styled.div`
text-align: center;
height: 5%;
border-bottom: 1px solid black;
`

export const Informacoes = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`

export const PerfilPessoa = styled.div`
height: 20%;
display:  flex;
justify-content: space-between;
div:nth-child(1){
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
div:nth-child(2){
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}
`

export const EnderecoPessoa = styled.div`
height: 10%;
background-color: lightgray;
display: flex;
justify-content: space-between;
div:nth-child(1){
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
div:nth-child(2){
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}
`
export const HistoriCompras = styled.div`
height: 70%;

`