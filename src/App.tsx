import Header from './components/Header';
import { getProducts } from './services/api';
import GlobalStyle from './styles/global';

function App() {
  getProducts();

  return (
    <>
      <Header />

      <GlobalStyle />
    </>
  );
}

export default App;
