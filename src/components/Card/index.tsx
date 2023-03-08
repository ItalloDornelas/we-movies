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
  const { addProducts, products } = useProducts();

  const handleClick = (productApi: ProductsType) => {
    if (!products.includes(productApi)) {
      addProducts([...products, productApi]);
    }
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
                {productApi.clicked > 0 ? (
                  <ProductButtonSuccess
                    onClick={() => {
                      productApi.clicked += 1;
                      handleClick(productApi);
                    }}
                  >
                    <ContentButton>
                      <img src={CartImg} alt="carrinho" />

                      {productApi.clicked}
                    </ContentButton>
                    Item adicionado
                  </ProductButtonSuccess>
                ) : (
                  <ProductButton
                    onClick={() => {
                      productApi.clicked += 1;
                      handleClick(productApi);
                    }}
                  >
                    <ContentButton>
                      <img src={CartImg} alt="carrinho" />
                      {productApi.clicked}
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
