import styled from "styled-components"
export const ContainerHeader =styled.header`
display: flex;
justify-content: space-between;
padding: 0 1em 0 1em;
align-items: center;
height: 10vh;
background-color: #FB5C62;
a{
    cursor: pointer;
    color: white;
    font-size: 2em;
}
button{
    background-color: white;
    border: none;
    border-radius: 5px;
    width: 18vw;
    height: 5vh;
    font-size: 16px;
    color:#FB5C62;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
       background-color: #ff8645;
        color:white;

    }
    &:active{
        color: black;
    }

}
`