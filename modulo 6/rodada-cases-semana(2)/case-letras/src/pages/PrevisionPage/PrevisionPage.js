import React, { useEffect, useState } from "react"
import {
    Main,
    ContainerPrevision,
    ContainerCurrentTemperature,
    ContainerMinMaxTemperature,
    CityName,
    Description,
    CurrentTemperature,
    WeatherImage,
    MinMaxTemperature,
    MinMaxTemperature2,
    PrevisionForFiveDays
} from "./styled"
import Header from "../../Components/Header/Header"
import NavLanguage from "../../Components/NavLanguage/NavLanguage"
import { useGlobal } from "../../Global/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import { goToPrevisionPageFiveDays } from "../../Routes/coordinator"
import axios from "axios"
import { BASE_URL } from "../../Constants/url"

const PrevisionPage = () => {
    const navigate = useNavigate()
    const { states, setters } = useGlobal()
    const { setWeatherName } = setters
    const { search, language, weatherName, units,languagePrevisionPage} = states
    const [weatherPrevision, setWeatherPrevision] = useState({})



    const getWeatherPrevision = async () => {
        await axios
            .get(`${BASE_URL}`, {
                params: {
                    q: search || weatherName,
                    appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                    lang: language.toString(),
                    units: units,
                }
            })
            .then((res) => {

                setWeatherPrevision(res.data)
                setWeatherName(res.data.name)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    useEffect(() => {
        getWeatherPrevision()
    }, [language, units])


    return (
        <Main>
            <Header />
            <ContainerPrevision>
                <CityName>{weatherPrevision && weatherPrevision.name && weatherPrevision.name.toUpperCase()}</CityName>
                <Description>{weatherPrevision && weatherPrevision.weather && weatherPrevision.weather[0].description}</Description>
                <ContainerCurrentTemperature>
                    <CurrentTemperature>{weatherPrevision && weatherPrevision.main && Number(weatherPrevision.main.temp).toFixed()}°</CurrentTemperature>
                    <WeatherImage src={`http://openweathermap.org/img/wn/${weatherPrevision && weatherPrevision.weather && weatherPrevision.weather[0] && weatherPrevision.weather[0].icon}@2x.png`} />
                </ContainerCurrentTemperature>
                <ContainerMinMaxTemperature>
                    <MinMaxTemperature>Max: <p>{weatherPrevision && weatherPrevision.main && Number(weatherPrevision.main.temp_max).toFixed()}°</p></MinMaxTemperature>
                    <MinMaxTemperature2>Min:<p>{weatherPrevision && weatherPrevision.main && Number(weatherPrevision.main.temp_min).toFixed()}°</p></MinMaxTemperature2>
                </ContainerMinMaxTemperature>
                <PrevisionForFiveDays onClick={() => goToPrevisionPageFiveDays(navigate)}>{languagePrevisionPage}</PrevisionForFiveDays>
            </ContainerPrevision>
            <NavLanguage />
        </Main>
    )
}
export default PrevisionPage