import React, { useEffect, useState } from "react"
import Brasil from "../../assets/brasil.svg"
import UnitedStates from "../../assets/estados-unidos.svg"
import Spain from "../../assets/spain.svg"
import { useGlobal } from "../../Global/GlobalStateContext"
import { Nav, Language } from "./styled"


const NavLanguage = () => {
    const { setters } = useGlobal()
    const { setLanguage,setTittleHome,setLanguagePrevisionPage,setLanguageFiveDaysPage} = setters
    const [country, setCountry] = useState('Idioma selecionado: Portugues')

    const onClickBrasil = () =>{ 
       setCountry('Idioma selecionado: Português') 
       setLanguage('pt')
       setTittleHome('Como está o tempo hoje?')
       setLanguagePrevisionPage("Ver previsao para os proximos 5 dias")
       setLanguageFiveDaysPage("Previsão para 5 dias")
    }
    const onClickUnitedStates = () =>{ 
        setCountry('Selected language: English')
        setLanguage('en')
        setTittleHome('How is the weather today ?')
        setLanguagePrevisionPage("See forecast for the next 5 days")
        setLanguageFiveDaysPage("Forecast for 5 days")
    }
    const onClickSpain = () => {
        setCountry('Idioma seleccionado: Español') 
        setLanguage('es')
        setTittleHome('Como está el tiempo hoy ?')
        setLanguagePrevisionPage("Ver previsión para los próximos 5 días")
        setLanguageFiveDaysPage("Pronóstico para 5 días")
    }

 

    return (
        <>
            <Nav>
                <img src={Brasil} onClick={onClickBrasil} />
                <img src={UnitedStates} onClick={onClickUnitedStates} />
                <img src={Spain} onClick={onClickSpain} />
            </Nav>
            <Language>{country}</Language>
        </>
    )
}
export default NavLanguage