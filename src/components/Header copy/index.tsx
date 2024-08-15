import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, LinkItem, Links, LinkCar, BackImg } from './styles'
import Back from '../../assets/images/VectoP.jpg'

const HeaderSecond = () => (
  <HeaderBar>
    <BackImg style={{ backgroundImage: `url(${Back})` }}>
      <div>
        <Links>
          <LinkItem>
            <Link to="/">Categorias</Link>
          </LinkItem>
        </Links>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <LinkCar href="#">0 - produto(s) no carrinho</LinkCar>
    </BackImg>
  </HeaderBar>
)

export default HeaderSecond
