import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import api from '../../services/api';
import { ProductsType } from '../../services/api.interface';

function Home() {
  const [products, setProducts] = useState<ProductsType[]>(
    [] as ProductsType[]
  );
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    const response = await api.get('products');

    const data = response.data.map((product: ProductsType) => ({
      ...product,
      clicked: 0,
    }));

    setLoading(false);
    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Card productsApi={products} loading={loading} />
    </>
  );
}
export default Home;
