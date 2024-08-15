import Food from '../../models/FoodsPerfil'
import ProductSecond from '../Product2'
import { Container, List } from './styles'

export type Props = {
  foods: Food[]
}

const ProductListSecond = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <ProductSecond
            key={food.id}
            description={food.description}
            image={food.image}
            title={food.title}
            button={food.button}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductListSecond
