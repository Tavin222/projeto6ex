import pizza from '../../assets/images/pizza.png'
import Food from '../../models/FoodsPerfil'
import ProductListSecond from '../../components/ProductList2'
import Banner from '../../components/Banner'
import HeaderSecond from '../../components/Header copy'

const perfil: Food[] = [
  {
    button: 'Adcionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    id: 1
  },
  {
    button: 'Adcionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    id: 2
  },
  {
    button: 'Adcionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    id: 3
  },
  {
    button: 'Adcionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    id: 4
  },
  {
    button: 'Adcionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    id: 4
  },
  {
    button: 'Adcionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita',
    id: 4
  }
]

const Perfil = () => (
  <>
    <HeaderSecond />
    <Banner />
    <ProductListSecond foods={perfil} />
  </>
)

export default Perfil
