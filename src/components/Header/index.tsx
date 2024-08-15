import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, BackImg, Text } from './styles'
import Back from '../../assets/images/VectoP.jpg'

const Header = () => (
  <BackImg style={{ backgroundImage: `url(${Back})` }}>
    <HeaderBar>
      <Link to={'/perfil'}>
        <img src={logo} alt="" />
      </Link>
      <Text>
        Viva experiências gastronômicas <br />
        <p> no conforto da sua casa </p>
      </Text>
    </HeaderBar>
  </BackImg>
)

export default Header
