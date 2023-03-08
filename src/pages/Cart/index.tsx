import { useProducts } from '../../providers/products';
import { formatValue } from '../../utils/index';
import { CardContainer, Container, ContainerNull, Image } from './styles';

function Cart() {
  const { products, deleteProducts } = useProducts();

  const subtotal = products
    .reduce((product, acc) => acc.price + product, 0)
    .toFixed(2);

  const redirect = () => {
    console.log('REdirect');
  };

  if (!products.length) {
    return (
      <ContainerNull>
        <h1> Carrinho vazio, vamos as compras?</h1>
        <button onClick={() => console.log('/')}>Voltar aos Produtos</button>
      </ContainerNull>
    );
  }

  return (
    <>
      <Container>
        <div>
          <div>
            <h3>Produto</h3>
            <h3>Preço</h3>
          </div>
          <section>
            {products.map((product) => (
              <div key={product.id}>
                <Image src={product.image} alt="Produto" />
                <h4>{product.title}</h4>
                {formatValue(product.price)}

                <button onClick={() => deleteProducts(product)}>
                  Remover do Carrinho
                </button>
              </div>
            ))}
          </section>
        </div>
        <section className="sectionPedidos">
          <div>
            <h2>
              <strong>Resumo do pedido</strong>
            </h2>
            <CardContainer>
              <h4>{products.length} Produtos</h4>
              <h4>{formatValue(parseInt(subtotal))}</h4>
            </CardContainer>
          </div>
          <div>
            <button onClick={redirect}>Finalizar o pedido</button>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Cart;
