import React from "react"
import {
    ContainerHeader,
    BackArrow,
    ContainerToggle,
    Switch,
    Slider,
    Checked,
    Fa,
    Ce,

} from "./styled"
import backArrow from "../../assets/back-arrow.png"
import { useNavigate, useLocation } from "react-router-dom"
import { goToBack } from "../../Routes/coordinator"
import { useGlobal } from "../../Global/GlobalStateContext"


const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { states, setters } = useGlobal()
    const { choiceUnit } = states
    const { setUnits, setChoiceUnit } = setters

    const choice = () => {
        if (choiceUnit === false) {
            setChoiceUnit(true)
            setUnits("metric")
        } else {
            setChoiceUnit(false)
            setUnits("imperial")
        }
    }

    return (

        <>
            {
                location.pathname === `/` ?
                    <ContainerHeader>
                        <ContainerToggle>
                            <Fa>°F</Fa>
                            <Switch choice={choiceUnit}>
                                <Checked className="check" alt="Trocar para °F ou C°" type="checkbox" onChange={() => choice()} />
                                <Slider className="slider" />
                            </Switch>
                            <Ce>°C</Ce>
                        </ContainerToggle>
                    </ContainerHeader>
                    : null
            }

            {
                location.pathname === `/prevision` ?
                    <ContainerHeader>
                        <BackArrow src={backArrow} onClick={() => goToBack(navigate)} alt="Seta para voltar pagina" />
                        <ContainerToggle>
                            <p>°F</p>
                            <Switch  choice={choiceUnit}>
                                <Checked alt="Trocar para °F ou C°" className="check" type="checkbox" onChange={() => choice()} />
                                <Slider className="slider" />
                            </Switch>
                            <p>°C</p>
                        </ContainerToggle>
                    </ContainerHeader>
                    : null
            }

            {
                location.pathname === `/prevision/five-days` ?
                    <ContainerHeader>
                        <BackArrow src={backArrow} onClick={() => goToBack(navigate)} alt="Seta para voltar pagina" />
                        <ContainerToggle>
                            <p>°F</p>
                            <Switch  choice={choiceUnit}>
                                <Checked alt="Trocar para °F ou C°" className="check" type="checkbox" onChange={() => choice()} />
                                <Slider className="slider" />
                            </Switch>
                            <p>°C</p>
                        </ContainerToggle>
                    </ContainerHeader>
                    : null
            }
        </>

    )
}
export default Header