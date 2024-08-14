import { Container, FooterSection, Link, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import insta from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg'
import face from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={logo} />
      </FooterSection>
      <FooterSection>
        <Links>
          <li>
            <Link src={insta} />
          </li>
          <li>
            <Link src={face} />
          </li>
          <li>
            <Link src={twitter} />
          </li>
        </Links>
      </FooterSection>
      <p>
        {' '}
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </div>
  </Container>
)

export default Footer
