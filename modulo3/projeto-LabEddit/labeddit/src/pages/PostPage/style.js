import styled from "styled-components";


export const ContainerPostPage =styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1.5em;
`
export const Cardget=styled.div`
display: flex;
flex-direction: column;
justify-content: left;
background-color: #f2f2f2;
border-radius: 2px solid;
margin: 2px;
width: 70%;
min-height: 15vh;
padding: 1em;
border: 1px solid #e0e0e0 ;
border-radius: 12px;
background-color: #fbfbfb;
word-wrap: break-word;

`
export const ContainerForm =styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`
export const IputComents=styled.input`
height: 4vh;
padding-left:1em;
margin: 0.3em;
width: 60%;
border-radius: 3px;
border: 1px solid #D5D8DE;
margin: 0.5em;
`
export const ButtonComents=styled.button`
width: 75%;
height: 2.5em;
color:  white;
background:linear-gradient(to right, rgb(255, 65, 108), rgb(255, 75, 43));
border-radius: 10px;
border: none;
font-size: 1em;
cursor: pointer;
transition: 0.3s;
margin-bottom: 1em;
margin-top: 0.5em;
&:hover{
    background:linear-gradient(to left, rgb(255, 65, 108), rgb(255, 75, 43));
    width: 77%;
}
&:active{
    color: black;
}


`
export const DivStyle=styled.div`
width:90%;
background:linear-gradient(to right, rgb(255, 65, 108), rgb(255, 75, 43));
height: 1px;
margin-bottom:1.5em;
`
