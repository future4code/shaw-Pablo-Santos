import React, { useEffect, useState } from "react"
import { BASE_URL_FORECAST_HOURLY } from "../../Constants/url"
import axios from "axios"
import { useGlobal } from "../../Global/GlobalStateContext"
import {
    ContainerFiveDays,
    Main,
    CityName,
    Tittle,
    SectionPrevisionFiveDays,
    DivForFiveDays,
    Date,
    ImagePrevision,
    Temperature,
    Description,
    Termomether,
} from "./styled"
import NavLanguage from "../../Components/NavLanguage/NavLanguage"
import Header from "../../Components/Header/Header"
import * as moment from 'moment';
import 'moment/locale/pt-br';

const PrevisionOfFiveDaysPage = () => {


    const { states } = useGlobal()
    const { search,weatherName, language,units,languageFiveDaysPage} = states
    const [forestFiveDays, setForestFiveDays] = useState({})

    const getForecastHourly = async () => {

        await axios
            .get(`${BASE_URL_FORECAST_HOURLY}`, {
                params: {
                    q: search || weatherName,
                    appid: "50f2f9bb26d719317417c5fdfec49231",
                    lang: language.toString(),
                    units: units,
                }
            })
            .then((res) => {
                setForestFiveDays(res.data)
            })
            .catch((err) => {
               
            })
    }

    useEffect(() => {
        getForecastHourly()
    }, [language,units])




    return (
        <Main>
            <Header />
            <ContainerFiveDays>
                <CityName>{forestFiveDays && forestFiveDays.city && forestFiveDays.city.name.toUpperCase()} </CityName>
                <Tittle>{languageFiveDaysPage}</Tittle>
                <SectionPrevisionFiveDays >
                    <DivForFiveDays>
                        <Date>{moment(forestFiveDays && forestFiveDays.list && forestFiveDays.list[0].dt_txt).locale('pt-br').format('llll').slice(0, 13).toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())}</Date>
                        <ImagePrevision alt="Imagem da previsao" src={`http://openweathermap.org/img/wn/${forestFiveDays && forestFiveDays.list && forestFiveDays.list[0].weather[0] && forestFiveDays.list[0].weather[0].icon}@2x.png`} />
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[0].main.temp_min).toFixed()}°</Temperature>
                        <Termomether></Termomether>
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[0].main.temp_max).toFixed()}°</Temperature>
                        <Description>{forestFiveDays && forestFiveDays.list && forestFiveDays.list[0].weather[0].description}</Description>
                    </DivForFiveDays>
                    <DivForFiveDays>
                        <Date>{moment(forestFiveDays && forestFiveDays.list && forestFiveDays.list[8].dt_txt).locale('pt-br').format('llll').slice(0, 13).toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())}</Date>
                        <ImagePrevision alt="Imagem da previsao" src={`http://openweathermap.org/img/wn/${forestFiveDays && forestFiveDays.list && forestFiveDays.list[8].weather[0] && forestFiveDays.list[8].weather[0].icon}@2x.png`} />
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[8].main.temp_min).toFixed()}°</Temperature>
                        <Termomether></Termomether>
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[8].main.temp_max).toFixed()}°</Temperature>
                        <Description>{forestFiveDays && forestFiveDays.list && forestFiveDays.list[8].weather[0].description}</Description>
                    </DivForFiveDays>
                    <DivForFiveDays>
                        <Date>{moment(forestFiveDays && forestFiveDays.list && forestFiveDays.list[16].dt_txt).locale('pt-br').format('llll').slice(0, 13).toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())}</Date>
                        <ImagePrevision alt="Imagem da previsao" src={`http://openweathermap.org/img/wn/${forestFiveDays && forestFiveDays.list && forestFiveDays.list[16].weather[0] && forestFiveDays.list[16].weather[0].icon}@2x.png`} />
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[16].main.temp_min).toFixed()}°</Temperature>
                        <Termomether></Termomether>
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[16].main.temp_max).toFixed()}°</Temperature>
                        <Description>{forestFiveDays && forestFiveDays.list && forestFiveDays.list[16].weather[0].description}</Description>
                    </DivForFiveDays>
                    <DivForFiveDays>
                        <Date>{moment(forestFiveDays && forestFiveDays.list && forestFiveDays.list[24].dt_txt).locale('pt-br').format('llll').slice(0, 13).toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())}</Date>
                        <ImagePrevision alt="Imagem da previsao" src={`http://openweathermap.org/img/wn/${forestFiveDays && forestFiveDays.list && forestFiveDays.list[24].weather[0] && forestFiveDays.list[24].weather[0].icon}@2x.png`} />
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[24].main.temp_min).toFixed()}°</Temperature>
                        <Termomether></Termomether>
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[24].main.temp_max).toFixed()}°</Temperature>
                        <Description>{forestFiveDays && forestFiveDays.list && forestFiveDays.list[24].weather[0].description}</Description>
                    </DivForFiveDays>
                    <DivForFiveDays>
                        <Date>{moment(forestFiveDays && forestFiveDays.list && forestFiveDays.list[32].dt_txt).locale('pt-br').format('llll').slice(0, 13).toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())}</Date>
                        <ImagePrevision alt="Imagem da previsao" src={`http://openweathermap.org/img/wn/${forestFiveDays && forestFiveDays.list && forestFiveDays.list[32].weather[0] && forestFiveDays.list[32].weather[0].icon}@2x.png`} />
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[32].main.temp_min).toFixed()}°</Temperature>
                        <Termomether></Termomether>
                        <Temperature>{forestFiveDays && forestFiveDays.list && Number(forestFiveDays.list[32].main.temp_max).toFixed()}°</Temperature>
                        <Description>{forestFiveDays && forestFiveDays.list && forestFiveDays.list[32].weather[0].description}</Description>
                    </DivForFiveDays>
                </SectionPrevisionFiveDays>
            </ContainerFiveDays>
            <NavLanguage />
        </Main>
    )
}
export default PrevisionOfFiveDaysPage