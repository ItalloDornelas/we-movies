import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface Cart {
  id?: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
interface CartProviderData {
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
  deleteCart: (cart: Cart) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart[]>([] as Cart[]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const deleteCart = (cartToBeDeleted: Cart) => {
    const newList = cart.filter((cart) => cart.id !== cartToBeDeleted.id);
    setCart(newList);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCarts = () => useContext(CartContext);
