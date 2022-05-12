import styled from "styled-components";

export const ContainerComent =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #fbfbfb;
margin: 2px;
min-width: 70%;
min-height: 20vh;
border-radius: 12px;
border: 1px solid #e0e0e0;
padding: 1em;
word-wrap: break-word;

`
export const ContainerButtons =styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
align-items: center;
margin: 0.2rem;
span{
    font-size: 20px;
    cursor: pointer;
}
`
export const DivLikesDislikes =styled.div`
display: flex;
width: 60%;
justify-content: left;
align-items: center;
span{
    margin: 1em;
}
`
export const DivDelButton =styled.div`
display: flex;
width: 50%;
justify-content: center;
align-items: center;
p{
 margin: 0.5em;    
}

`