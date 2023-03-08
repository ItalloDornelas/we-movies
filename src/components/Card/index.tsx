import { useState } from 'react';
import CartImg from '../../assets/image/cart.png';
import { useProducts } from '../../providers/products';
import { ProductsType } from '../../services/api.interface';
import { formatValue } from '../../utils';
import {
  Container,
  ContentButton,
  Loading,
  LoadingContainer,
  ProductButton,
  ProductButtonSuccess,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductTitle,
  ProductUl,
} from './styles';

interface ICardProps {
  loading: boolean;
  productsApi: ProductsType[];
}

function Card({ loading, productsApi }: ICardProps) {
  const { addProducts, products, replaceSameProducts } = useProducts();

  const [productId, setProductId] = useState(0);

  const handleClick = (productApi: ProductsType) => {
    if (!products.includes(productApi)) {
      addProducts([...products, productApi]);
    } else {
      replaceSameProducts();
    }
  };

  const handleClickedTimes = (productApi: ProductsType) => {
    if (productApi.id === productId) {
      return 1;
    }
    return 0;
  };

  return (
    <>
      <Container>
        {loading ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <ProductUl>
            {productsApi.map((productApi) => (
              <ProductList key={productApi.id}>
                <figure>
                  <ProductImage src={productApi.image} alt={productApi.title} />
                </figure>
                <ProductTitle>{productApi.title}</ProductTitle>

                <ProductPrice>{formatValue(productApi.price)}</ProductPrice>
                {handleClickedTimes(productApi) > 0 ? (
                  <ProductButtonSuccess
                    onClick={() => {
                      handleClick(productApi);
                    }}
                  >
                    <ContentButton>
                      <img src={CartImg} alt="carrinho" />
                      {1}
                    </ContentButton>
                    Item adicionado
                  </ProductButtonSuccess>
                ) : (
                  <ProductButton
                    onClick={() => {
                      setProductId(productApi.id);
                      handleClick(productApi);
                    }}
                  >
                    <ContentButton>
                      <img src={CartImg} alt="carrinho" />
                      {handleClickedTimes(productApi)}
                    </ContentButton>
                    Adicionar ao Carrinho
                  </ProductButton>
                )}
              </ProductList>
            ))}
          </ProductUl>
        )}
      </Container>
    </>
  );
}

export default Card;
