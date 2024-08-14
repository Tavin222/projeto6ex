import Text from '../../components/TextHeader'
import ProductList from '../../components/ProductList'
import Foods from '../../models/Foods'
import comida from '../../assets/images/comida.png'

const homes: Foods[] = [
  {
    more: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    id: 1
  },
  {
    more: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    id: 2
  },
  {
    more: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    id: 3
  },
  {
    more: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    id: 4
  },
  {
    more: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    id: 4
  },
  {
    more: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comida,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    id: 4
  }
]

const Home = () => (
  <>
    <Text />
    <ProductList foods={homes} />
  </>
)

export default Home
