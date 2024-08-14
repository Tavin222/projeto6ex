import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, LinkItem, Links, LinkCar } from './styles'

const Header = () => (
  <HeaderBar>
    <Links>
      <LinkItem>
        <Link to="/perfil">Categorias</Link>
      </LinkItem>
    </Links>
    <Link to={'/'}>
      <img src={logo} alt="" />
    </Link>
    <LinkCar href="#">0 - produto(s)</LinkCar>
  </HeaderBar>
)

export default Header
