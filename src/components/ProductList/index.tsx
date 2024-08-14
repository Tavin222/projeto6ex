import Foods from '../../models/Foods'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  foods: Foods[]
}

const ProductList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            more={food.more}
            description={food.description}
            image={food.image}
            infos={food.infos}
            title={food.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
