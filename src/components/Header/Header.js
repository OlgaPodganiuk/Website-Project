import { Route } from 'react-router-dom';
import { useState } from 'react';

import NavBar from './NavBar';
import './Header.css';
import Home from '../Home/Home';
import Meals from '../Meals/Meals';
import Cart from '../Cart/Cart';
import CartProvider from '../../store/CartProvider';

const Header = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <CartProvider>
        <header id='header-home'>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <div className='container'>
            <NavBar onShowCart={showCartHandler} ></NavBar>
          </div>
        </header>
        <main>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/meals'>
            <Meals />
          </Route>
        </main>
      </CartProvider>
    </div>
  );
};

export default Header;