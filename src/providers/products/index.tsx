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
  deleteProducts: (carts: ProductsType) => void;
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

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const deleteProducts = (productToBeDeleted: ProductsType) => {
    const newList = products.filter(
      (cart) => cart.id !== productToBeDeleted.id
    );
    addProducts(newList);
  };

  return (
    <ProductContext.Provider value={{ products, addProducts, deleteProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
