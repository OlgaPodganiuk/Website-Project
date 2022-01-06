import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  const shoppingCart = <i className="fas fa-shopping-cart"></i>;

  return (
    <nav id='main-nav'>
      <p><i className="fas fa-seedling fa-2x"></i> iHerb</p>
      <ul>
        <li>
          <Link to='/home'>
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to='/meals'>
            <button>Shop</button>
          </Link>
        </li>
        <li>
          <Link to='/cart'>
            <button><i className="fas fa-shopping-cart"></i> Cart</button>
          </Link>
        </li>
        {/* <NavBarListItem onLink='../About/About'  onContent='About'/>
        <NavBarListItem onContent='Shop' />
        <NavBarListItem onContent='Contact'/>
        <NavBarListItem onContent={shoppingCart}/> */}
      </ul>
    </nav>
  );
};

export default NavBar;