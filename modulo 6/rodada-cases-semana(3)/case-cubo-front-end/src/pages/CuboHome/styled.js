import styled from 'styled-components'

export const Header = styled.header`
height: 20vh;
width: 100%;
background:#00b8e2 ;
display: flex;
align-items: center;
justify-content: center;
form{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
`

export const Main = styled.main`
height: 80vh;
width: 100%;
background:white;
`
export const Inputs = styled.input`
height: 3rem;
width: 16%;
padding-left: 1rem;
border-radius: 2px;
border: none;
margin-right: 1rem;
font-family: 'Roboto', sans-serif;
`

export const Button = styled.button`
height: 3rem;
width:10%;
color: white;
font-size:1.2rem;
border:2px solid white;
background-color:#00b8e2 ;
transition: 0.2s;
font-family: 'Roboto', sans-serif;
cursor: pointer;
&&:hover{
    opacity: 0.7;
}
&&:active{
    width:9.8%;
    height: 2.96rem;
}
`
export const DataTitle = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 100%;
height:20vh;
h1{
    color: #394b50;
    font-family: 'Roboto', sans-serif;
}
p{
    color: #394b50;
    font-family: 'Roboto', sans-serif;
}
`
export const Section = styled.section`
width: 100%;
height: auto;
display: flex;
justify-content:center;
`
export const Table = styled.div`
padding-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 30%;
  color: #394b50;
    font-family: 'Roboto', sans-serif;
`;
export const TableHead = styled.div`
display: grid;
grid-template-columns: 9.5% 30.16% 30.16% 30.16%;
`;
export const TableBody = styled.div`
display: grid;
grid-template-columns: 9.5% 30.16% 30.16% 30.16%;
`;
export const ItemTable = styled.div`
 border: 0.5px solid #b7b7b7;
  padding: 10px;
  text-align: center;
  border-left:none;
`;
export const ItemTable2 = styled.div`
 border: 0.5px solid #b7b7b7;
  padding: 10px;
  text-align: center;
  border-top:none;
  border-left:none;
`;
export const ItemTableId = styled.div`
display: flex;
justify-content: center;
border: 0.5px solid #b7b7b7;
`
export const ItemTableId2 = styled.div`
border: 0.5px solid #b7b7b7;
border-top: none;
display: flex;
justify-content: center;
padding: 10px;
`
export const ConteinerGraphic = styled.aside`
width: 20rem;
display: flex;
justify-content: flex-end;
margin-left: 5rem;
`