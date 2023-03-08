import { useProducts } from '../../providers/products';
import {
  CartLink,
  ContainerHeader,
  NavLink,
  Text,
  Title,
  TitleLink,
} from './styles';

import { useLocation, useNavigate } from 'react-router-dom';
import ShoppingBagImg from '../../assets/image/shopping-bag.png';

export default function Header() {
  const { products, clearCart } = useProducts();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ContainerHeader>
      <Title
        onClick={() => {
          navigate('/');
          clearCart();
        }}
      >
        WeMovies
      </Title>
      {location.pathname === '/success' ? (
        <NavLink to="/" onClick={clearCart}>
          <CartLink>
            <TitleLink>Meu Carrinho </TitleLink>
            <Text>{products.length} itens </Text>
          </CartLink>
          <img src={ShoppingBagImg} alt="sacola de compras" />
        </NavLink>
      ) : (
        <NavLink to="/cart">
          <CartLink>
            <TitleLink>Meu Carrinho </TitleLink>
            <Text>{products.length} itens </Text>
          </CartLink>
          <img src={ShoppingBagImg} alt="sacola de compras" />
        </NavLink>
      )}
    </ContainerHeader>
  );
}
