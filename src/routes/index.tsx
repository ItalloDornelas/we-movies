import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Success from '../pages/Success';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

export default Router;
