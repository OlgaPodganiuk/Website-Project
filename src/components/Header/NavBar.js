import { NavLink } from 'react-router-dom';

import HeaderCartButton from './HeaderCartButton';
import './NavBar.css';

const NavBar = (props) => {
  const shoppingCart = <i className="fas fa-shopping-cart"></i>;

  return (
    <nav id='main-nav'>
      <p><i className="fas fa-seedling fa-2x"></i> iHerb-rita</p>
      <ul>
        <li>
          <NavLink className='menu-btn'  activeClassName='active' to='/home'>
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink className='menu-btn' activeClassName='active' to='/products'>
            Продукти
          </NavLink>
        </li>
        <li>
          <HeaderCartButton onClick={props.onShowCart}/>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;