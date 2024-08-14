import Tag from '../Tag'
import { Card, Descricao, Imagem, Infos, Nota, Titulo } from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  more: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, more, description, image, infos }: Props) => (
  <Card>
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Nota>
      <Imagem src={image} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Tag>{more}</Tag>
    </Nota>
  </Card>
)

export default Product
