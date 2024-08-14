import { Botao, Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
  button: string
}

const ProductSecond = ({ title, description, image, button }: Props) => (
  <Card>
    <img src={image} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>{button}</Botao>
  </Card>
)

export default ProductSecond
