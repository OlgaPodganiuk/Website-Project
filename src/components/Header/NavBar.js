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
          <NavLink activeClassName='active' to='/home'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/meals'>
            Shop
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