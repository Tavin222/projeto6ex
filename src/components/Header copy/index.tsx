import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, LinkItem, Links, LinkCar, BackImg } from './styles'
import Back from '../../assets/images/VectoP.jpg'

const HeaderSecond = () => (
  <BackImg style={{ backgroundImage: `url(${Back})` }}>
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
  </BackImg>
)

export default HeaderSecond
