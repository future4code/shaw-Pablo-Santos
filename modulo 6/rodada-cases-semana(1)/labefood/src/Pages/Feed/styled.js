import styled from 'styled-components'



export const Main = styled.div`
margin-bottom: 1rem;
`;


export const CardRestaurant = styled.div`
padding: 0 1rem;
margin-top: 0.5rem;
`;

export const BoxInputSearch = styled.div`
padding: 0 1rem;
margin-top:0.5rem;
`;
export const InputSearch = styled.input`
width: 100%;
height: 3.5rem;
padding: 1rem;
border-radius: 2px;
border: solid 1px gray;

`;
export const Menu = styled.nav`
height: 2.625rem;
display: flex;
align-items: center;
padding: 0 0 0 1rem ;
width: 100%;
overflow-x: auto;

`;
export const MenuItem = styled.button`
font-family: Roboto;
font-size: 1rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
background-color: transparent;
border: none;
outline:none;
padding: 0 1rem;
color: ${(p)=>p.select ? "red" :"black"};

`;