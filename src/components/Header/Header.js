import react from 'react';

import NavBar from './NavBar';
import './Header.css';

const Header = (props) => {
  return (
    <header id='header-home'>
      <div className='container'>
        <NavBar></NavBar>
      </div>
    </header>
  );
};

export default Header;