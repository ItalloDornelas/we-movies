import { useNavigate } from 'react-router-dom';
import EmptyImg from '../../assets/image/empty-cart.png';
import CheckoutCard from '../../components/CheckoutCard';
import { useProducts } from '../../providers/products';
import { ButtonNull, ContainerNull, TitleNull } from './styles';

function Cart() {
  const { products } = useProducts();

  const navigate = useNavigate();

  if (!products.length) {
    return (
      <ContainerNull>
        <TitleNull> Parece que não há nada por aqui :(</TitleNull>
        <img src={EmptyImg} alt="imagem carrinho vazio" />
        <ButtonNull onClick={() => navigate('/')}>Voltar</ButtonNull>
      </ContainerNull>
    );
  }

  return <CheckoutCard />;
}

export default Cart;
