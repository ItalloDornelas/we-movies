import CartImg from '../../assets/image/cart.png';
import { useProducts } from '../../providers/products';
import { ProductsType } from '../../services/api.interface';
import { formatValue } from '../../utils';
import {
  Container,
  ProductButton,
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
    addProducts([...products, productApi]);
  };

  return (
    <>
      <Container>
        {loading ? (
          'loading ...'
        ) : (
          <ProductUl>
            {productsApi.map((productApi, index) => (
              <ProductList key={productApi.id}>
                <figure>
                  <ProductImage src={productApi.image} alt={productApi.title} />
                </figure>
                <ProductTitle>{productApi.title}</ProductTitle>

                <ProductPrice>{formatValue(productApi.price)}</ProductPrice>
                <ProductButton
                  onClick={() => {
                    handleClick(productApi);
                  }}
                >
                  <span>
                    <img src={CartImg} alt="carrinho" />
                    {products.length ? index : 0}
                  </span>
                  Adicionar ao Carrinho
                </ProductButton>
              </ProductList>
            ))}
          </ProductUl>
        )}
      </Container>
    </>
  );
}

export default Card;
