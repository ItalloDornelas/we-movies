import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LessImg from '../../assets/image/less.png';
import PlusImg from '../../assets/image/plus.png';
import TrashImg from '../../assets/image/trash.png';
import { useProducts } from '../../providers/products';
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
  ImageProduct,
  ImgQtdProduct,
  InputProduct,
  QtdProduct,
  SubtotalProduct,
  TitleProduct,
  TotalProduct,
} from './styles';

function CheckoutCard() {
  const { products, deleteProducts, incrementSameProducts } = useProducts();

  const [inputValue, setInputValue] = useState(
    incrementSameProducts ? incrementSameProducts : 1
  );

  const navigate = useNavigate();

  const subtotal = products
    .reduce((product, acc) => acc.price * inputValue + product, 0)
    .toFixed(2);

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
                  <form>
                    <QtdProduct>
                      <ImgQtdProduct
                        src={LessImg}
                        alt="imagem do sinal de menos"
                        onClick={() => {
                          if (inputValue > 1) {
                            setInputValue(inputValue - 1);
                          }
                        }}
                      />
                      <InputProduct
                        type="number"
                        onChange={(event) => {
                          console.log(event.target);
                        }}
                      />
                      <ImgQtdProduct
                        src={PlusImg}
                        alt="imagem do sinal de mais"
                        onClick={() => setInputValue(inputValue + 1)}
                      />
                    </QtdProduct>
                  </form>
                </CardDesciption>
              </CardProduct>

              <CardProduct>
                <TitleProduct>SubTotal</TitleProduct>
                <CardDesciption>
                  <SubtotalProduct>
                    {formatValue(product.price * inputValue)}
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
            <TitleProduct>Total</TitleProduct>
            <DescriptionTotal>
              {formatValue(parseInt(subtotal))}
            </DescriptionTotal>
          </TotalProduct>
        </ContainerTotal>
      </Container>
    </>
  );
}

export default CheckoutCard;
