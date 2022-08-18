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
export const ContainerPrevision = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background: transparent;
`

export const CityName = styled.h1`
  background: transparent;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
    font-size: 2rem;
    letter-spacing: 2px;
    text-align: center;
    padding-left: 5px;
`
export const Description = styled.p`
  background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    color: #FFFFFF;
    font-size: 0.9rem;
    margin-top: 0.3rem;
`
export const ContainerCurrentTemperature = styled.div`
display: flex;
justify-content: center;
background: transparent;
text-align: center;
margin-top: 0.3rem;
`
export const CurrentTemperature = styled.h2`
  background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    color: #FFFFFF;
    font-size: 3rem;
`
export const WeatherImage = styled.img`
width: 3rem;
height: 3rem;
background-image: none;
`
export const ContainerMinMaxTemperature = styled.div`
display: flex;
justify-content: center;
background: transparent;
text-align: center;
margin-top: 0.3rem;

`
export const MinMaxTemperature = styled.h3`
display: flex;
  background: transparent;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
    margin-right:0.3rem;
    p{
      font-weight:300;
      background: transparent;
      padding-left: 0.2rem;
    }
`
export const MinMaxTemperature2 = styled.h3`
display: flex;
  background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #FFFFFF;
    p{
      font-weight: 300;
      background: transparent;
      padding-left: 0.2rem;
    }
    
`
export const PrevisionForFiveDays = styled.a`
  background: transparent;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    color: #FFFFFF;
    font-size: 0.8rem;
    margin-top: 0.7rem;
    text-decoration: underline;
    cursor: pointer;
`



