import react from "react";

import NavBarListItem from "./NavBarListItem";
import './NavBar.css';

const NavBar = (props) => {
  const shoppingCart = <i className="fas fa-shopping-cart"></i>;

  return (
    <nav id='main-nav'>
      <p><i className="fas fa-seedling fa-2x"></i> iHerb</p>
      <ul>
        <NavBarListItem onContent='Home'/>
        <NavBarListItem onContent='About'/>
        <NavBarListItem onContent='Shop' />
        <NavBarListItem onContent='Contact'/>
        <NavBarListItem onContent={shoppingCart}/>
      </ul>
    </nav>
  );
};

export default NavBar;