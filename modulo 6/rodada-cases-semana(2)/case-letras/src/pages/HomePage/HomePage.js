import React, { useEffect } from "react"
import axios from "axios"
import Header from "../../Components/Header/Header"
import NavLanguage from "../../Components/NavLanguage/NavLanguage"
import { 
    Main,
    Tittle,
    Select,
    ContainerSearch 
} from "./styled"
import { useGlobal } from "../../Global/GlobalStateContext"
import { BASE_URL } from "../../Constants/url"
import { useNavigate, useLocation } from "react-router-dom"
import { goToPrevisionPage } from "../../Routes/coordinator"
import { usePlacesWidget } from "react-google-autocomplete";

const HomePage = () => {

    const navigate = useNavigate()

    const { states, setters } = useGlobal()
    const { search, weather, language,tittleHome } = states
    const { setSearch, setWeather, setWeatherName} = setters

    function captalizeFirst(str) {
        const subst = str.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())
        return subst
    }
    captalizeFirst(search)
   

    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: "AIzaSyCuck9Jjsz1Td8ADz8dRtxZe_zSSWdnU8I",
        onPlaceSelected: (place) => {
           
        }
    });

    const getWeather = async () => {
        await axios
            .get(`${BASE_URL}`, {
                params: {
                    q: search,
                    appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                    lang: language.toString(),
                    units: "metric",
                }
            })
            .then((res) => {
                setWeather(res.data)
                setWeatherName(res.data.name)
                if (weather) {
                    return goToPrevisionPage(navigate)
                }
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    useEffect(() => {
    
        
    }, [language])

    const handleSearch = (e) => {
        e.preventDefault()
        getWeather()
    }


    return (
        <Main>
            <Header />
            <ContainerSearch onSubmit={handleSearch}>
                <Tittle>{tittleHome}</Tittle>
                <Select
                    ref={ref}
                    autoComplete={autocompleteRef}
                    type='select'
                    placeholder="Digite o nome da cidade"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </ContainerSearch>
            <NavLanguage />
        </Main>
    )
}
export default HomePage