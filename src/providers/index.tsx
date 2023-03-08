import { ReactNode } from 'react';

import { ProductProvider } from './products';
interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return <ProductProvider>{children}</ProductProvider>;
};

export default Providers;
