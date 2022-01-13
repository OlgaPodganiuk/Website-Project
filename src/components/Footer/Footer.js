import react from "react";
import './Footer.css';

import ContactItem from "./FooterItems/ContactItem";
import AboutItem from "./FooterItems/AboutItem";

const Footer = (props) => {
  return (
    <footer id='main-footer'>
      <div className='container footer'>
        <ContactItem />
        <AboutItem />
      </div>
    </footer>
  );
};

export default Footer;