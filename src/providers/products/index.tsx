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
  addProducToCart: (products: ProductsType) => void;
  clearCart: () => void;
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
      (product) => product.id !== productToBeDeleted.id
    );
    addProducts(newList);
  };

  function clearCart() {
    addProducts([]);
  }

  function addProducToCart(productToReplaced: ProductsType) {
    const copyProductsCart = [...products];

    const item = copyProductsCart.find(
      (product) => product.id === productToReplaced.id
    );

    if (!item) {
      copyProductsCart.push({
        id: productToReplaced.id,
        qtd: 1,
        title: productToReplaced.title,
        price: productToReplaced.price,
        image: productToReplaced.image,
        clicked: productToReplaced.clicked,
      });
    } else {
      item.qtd = item.qtd + 1;
    }

    addProducts(copyProductsCart);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        addProducts,
        deleteProducts,
        addProducToCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
