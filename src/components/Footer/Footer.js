import react from "react";
import './Footer.css';

const Footer = (props) => {
  return (
    <footer id='main-footer'>
      <div className='container footer-container'>
        <div className='items'>
          <i class="far fa-address-book fa-2x"></i>
        </div>
        <div className='items'>
          <i className="fas fa-seedling fa-2x"></i>
        </div>
        <div className='items'>
          <i class="fas fa-hands-helping fa-2x"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;