import { Route } from 'react-router-dom';

import NavBar from './NavBar';
import './Header.css';
import Home from '../Home/Home';
import Meals from '../Meals/Meals';
import Cart from '../Cart/Cart';

const Header = (props) => {
  return (
    <div>
      <header id='header-home'>
        <div className='container'>
          <NavBar></NavBar>
        </div>
      </header>
      <main>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/meals'>
          <Meals />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </main>
    </div>
  );
};

export default Header;