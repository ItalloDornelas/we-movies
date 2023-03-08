import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ProductsType } from '../../services/api.interface';

interface IProductsProviderData {
  products: ProductsType[];
  addProducts: Dispatch<SetStateAction<ProductsType[]>>;
  deleteProducts: (products: ProductsType) => void;
  replaceSameProducts: () => void;
  incrementSameProducts: number;
}

interface IProductsProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<IProductsProviderData>(
  {} as IProductsProviderData
);

export const ProductProvider = ({ children }: IProductsProviderProps) => {
  const [products, addProducts] = useState<ProductsType[]>(
    [] as ProductsType[]
  );

  const [incrementSameProducts, setIncrementSameProducts] = useState(1);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const deleteProducts = (productToBeDeleted: ProductsType) => {
    const newList = products.filter(
      (product) => product.id !== productToBeDeleted.id
    );
    addProducts(newList);
  };

  const replaceSameProducts = () => {
    setIncrementSameProducts(incrementSameProducts + 1);
    return incrementSameProducts;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProducts,
        deleteProducts,
        replaceSameProducts,
        incrementSameProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
