import Tag from '../Tag'
import { Botao, Card, Descricao, Imagem, Infos, Nota, Titulo } from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, description, image, infos }: Props) => (
  <Card>
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Nota>
      <Imagem src={image} />
      <Titulo>
        {title}{' '}
        <span>
          4.6
          <img src={estrela} />
        </span>
      </Titulo>
      <Descricao>{description}</Descricao>
      <Botao>Saiba mais</Botao>
    </Nota>
  </Card>
)

export default Product
