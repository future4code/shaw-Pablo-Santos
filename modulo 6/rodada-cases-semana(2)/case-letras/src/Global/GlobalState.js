import {  useState } from "react"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = ({ children }) => {
    const [search, setSearch] = useState("")
    const [weather, setWeather] = useState({})
    const [weatherName, setWeatherName] = useState("")
    const [language, setLanguage] = useState("pt")
    const [tittleHome, setTittleHome] = useState("Como está o tempo hoje ?")
    const [languagePrevisionPage, setLanguagePrevisionPage] = useState("Ver previsao para os proximos 5 dias")
    const [languageFiveDaysPage, setLanguageFiveDaysPage]=useState("Previsão para 5 dias")
    const [units, setUnits] = useState("imperial")
    const [choiceUnit, setChoiceUnit]=useState(false)

    const states = { search, weather, weatherName, language, units, tittleHome, languagePrevisionPage,languageFiveDaysPage,choiceUnit}
    const requests = {}
    const setters = { setSearch, setWeather, setWeatherName, setLanguage, setUnits, setTittleHome, setLanguagePrevisionPage,setLanguageFiveDaysPage ,setChoiceUnit}


    return (
        <GlobalStateContext.Provider value={{ states, requests, setters }}>
            {children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState