import { useProducts } from '../../providers/products';
import {
  CartLink,
  ContainerHeader,
  NavLink,
  Text,
  Title,
  TitleLink,
} from './styles';

import { useNavigate } from 'react-router-dom';
import ShoppingBagImg from '../../assets/image/shopping-bag.png';

export default function Header() {
  const { products } = useProducts();
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <Title onClick={() => navigate('/')}>WeMovies</Title>

      <NavLink to="/cart">
        <CartLink>
          <TitleLink>Meu Carrinho </TitleLink>
          <Text>{products.length} itens </Text>
        </CartLink>
        <img src={ShoppingBagImg} alt="sacola de compras" />
      </NavLink>
    </ContainerHeader>
  );
}
