import { useNavigate } from 'react-router-dom';
import LessImg from '../../assets/image/less.png';
import PlusImg from '../../assets/image/plus.png';
import TrashImg from '../../assets/image/trash.png';
import { useProducts } from '../../providers/products';
import { ProductsType } from '../../services/api.interface';
import { formatValue } from '../../utils/index';
import {
  ButtonProduct,
  Card,
  CardContainer,
  CardDesciption,
  CardProduct,
  Container,
  ContainerTotal,
  DesciptionProduct,
  DescriptionTotal,
  DividerProduct,
  DivProduct,
  DivProductContainer,
  DivTotalContainer,
  ImageProduct,
  ImgQtdProduct,
  InputProduct,
  QtdProduct,
  SubtotalProduct,
  SubtotalTitle,
  TitleProduct,
  TotalProduct,
  TotalTitle,
} from './styles';

function CheckoutCard() {
  const { products, deleteProducts, addProducToCart } = useProducts();

  const navigate = useNavigate();

  const total = parseFloat(
    products
      .reduce((product, acc) => acc.price * acc.clicked + product, 0)
      .toFixed(2)
  );

  const handleInputValue = (product: ProductsType) => {
    (
      document.getElementById(`input-id-${product.id}`) as HTMLInputElement
    ).value = product.clicked.toString();

    addProducToCart(product);
  };

  return (
    <>
      <Container>
        <CardContainer>
          {products.map((product) => (
            <Card key={product.id}>
              <CardProduct>
                <TitleProduct>Produto</TitleProduct>
                <CardDesciption>
                  <ImageProduct src={product.image} alt="Produto" />
                  <DesciptionProduct>
                    <div>{product.title}</div>
                    <div>{formatValue(product.price)}</div>
                  </DesciptionProduct>
                </CardDesciption>
              </CardProduct>
              <CardProduct>
                <TitleProduct>Qtd</TitleProduct>
                <CardDesciption>
                  <QtdProduct>
                    <ImgQtdProduct
                      src={LessImg}
                      alt="imagem do sinal de menos"
                      onClick={() => {
                        if (product.clicked > 1) {
                          product.clicked -= 1;
                        }
                        handleInputValue(product);
                      }}
                    />
                    <InputProduct
                      id={`input-id-${product.id}`}
                      type="number"
                      name="inputValue"
                      value={product.clicked}
                      disabled
                    />
                    <ImgQtdProduct
                      src={PlusImg}
                      alt="imagem do sinal de mais"
                      onClick={() => {
                        product.clicked += 1;
                        handleInputValue(product);
                      }}
                    />
                  </QtdProduct>
                </CardDesciption>
              </CardProduct>

              <CardProduct>
                <SubtotalTitle>SubTotal</SubtotalTitle>
                <CardDesciption>
                  <SubtotalProduct>
                    {formatValue(product.price * product.clicked)}
                  </SubtotalProduct>
                </CardDesciption>
              </CardProduct>
              <CardProduct>
                <DivProductContainer />
                <CardDesciption>
                  <DivProduct>
                    <ImgQtdProduct
                      src={TrashImg}
                      alt="imagem de uma lixiera"
                      onClick={() => {
                        deleteProducts(product);
                      }}
                    />
                  </DivProduct>
                </CardDesciption>
              </CardProduct>
            </Card>
          ))}
        </CardContainer>
        <DivTotalContainer>
          <DividerProduct />
          <ContainerTotal>
            <ButtonProduct
              onClick={() => {
                navigate('/success');
              }}
            >
              Finalizar pedido
            </ButtonProduct>
            <TotalProduct>
              <TotalTitle>Total</TotalTitle>
              <DescriptionTotal>{formatValue(total)}</DescriptionTotal>
            </TotalProduct>
          </ContainerTotal>
        </DivTotalContainer>
      </Container>
    </>
  );
}

export default CheckoutCard;
