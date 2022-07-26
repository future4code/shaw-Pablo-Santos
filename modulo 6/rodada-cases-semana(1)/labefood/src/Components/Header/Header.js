import { ContainerHeader, Tittle, } from './styled'
import { ArrowBackIosNew } from '@mui/icons-material'
import { goToBack } from '../../Routes/coodinator'
import {useNavigate} from 'react-router-dom'

const Header = ({ tittle, back }) => {
  const navigate = useNavigate()
  return (
    <ContainerHeader>
      {back && <ArrowBackIosNew onClick={()=>goToBack(navigate)}/>}
      <Tittle>{tittle}</Tittle>
    </ContainerHeader>
  )
}
export default Header