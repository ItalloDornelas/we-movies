import { useNavigate } from 'react-router-dom';
import SuccessImg from '../../assets/image/success.png';
import { useProducts } from '../../providers/products';
import { Button, Container, Title } from './styles';

function Success() {
  const navigate = useNavigate();

  const { clearCart } = useProducts();

  return (
    <Container>
      <Title> Compra realizada com sucesso!</Title>
      <img src={SuccessImg} alt="imagem de compra realizada" />
      <Button
        onClick={() => {
          navigate('/');
          clearCart();
        }}
      >
        Voltar
      </Button>
    </Container>
  );
}

export default Success;
