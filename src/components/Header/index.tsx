import { useCarts } from '../../providers/cart';
import {
  CartLink,
  ContainerHeader,
  NavLink,
  Text,
  Title,
  TitleLink,
} from './styles';

import ShoppingBagImg from '../../assets/image/shopping-bag.png';

export default function Header() {
  const { cart } = useCarts();

  return (
    <ContainerHeader>
      <Title>WeMovies</Title>

      <NavLink to="/cart">
        <CartLink>
          <TitleLink>Meu Carrinho </TitleLink>
          <Text>{cart.length} itens </Text>
        </CartLink>
        <img src={ShoppingBagImg} alt="sacola de compras" />
      </NavLink>
    </ContainerHeader>
  );
}
