import { Descricao, Imagem, Titulo } from './styles'
import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>italiana</Titulo>
      <Descricao>La Dolce Vita Trattoria</Descricao>
    </div>
  </Imagem>
)

export default Banner
