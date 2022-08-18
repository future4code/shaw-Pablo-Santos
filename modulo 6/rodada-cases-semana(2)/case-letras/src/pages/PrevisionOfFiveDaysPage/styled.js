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
export const ContainerFiveDays = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background: transparent;
@media (min-width: 769px) {
    max-width: 80%;
}
`;

export const SectionPrevisionFiveDays = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
height: 30%;
background: transparent;
margin-top: 1rem;
@media(min-width:769px) {
    margin-top:5rem ;
}
`
export const CityName = styled.h1`
   background: transparent;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
    padding-left: 5px;
    @media (min-width: 769px) {
        font-size: 2.5rem;
    }
`

export const Tittle = styled.p`
    background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 200;
    color: #FFFFFF;
  `

export const DivForFiveDays = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
width: 100%;
height: 35%;
background: transparent;
@media (min-width:769px) {
    display: grid;
   grid-template-columns: 8rem 3rem 0.5rem 11rem 0.5rem 11rem ;
    width: 70%;
    align-content: center;
    text-align: left;
    
}

`
export const Date = styled.p`
    background: transparent;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
    
`
export const ImagePrevision = styled.img`
    background-image: none;
    width: 1.5rem;
    margin: 0 10px;
    @media (min-width:769px) {
     margin:none;
    }
`
export const Temperature = styled.p`
    background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    color: #FFFFFF;

`
export const Termomether = styled.div`
   background-image: linear-gradient(to right,#B5C698,#B5C698,#E0972A );
   height: 4px;
   width: 6rem;


   @media (min-width: 768px){
    width: 10.5rem;
   }

`

export const Description = styled.p`
    background: transparent;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
    @media(max-width:768px) {
        display: none;
        

    }
`


