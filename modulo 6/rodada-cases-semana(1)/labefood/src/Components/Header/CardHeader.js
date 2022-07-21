import { ContainerHeader, Tittle,  } from './styled'


const Header = ({tittle}) => {
    return (
        <ContainerHeader>
          <Tittle>{tittle}</Tittle>
        </ContainerHeader>
    )
}
export default Header