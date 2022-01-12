import react from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';

import './HomeShop.css';

const HomeShop = () => {
  return (
    <div className='home-shop'>
      <div className='flex'>
        <Link to='/product-category/kids'>
          <div className='items'>
            <img className='img' src={img1} alt='Все для дітей' />
          </div>
        </Link>
        <Link to='/product-category/adults'>
          <div className='items'>
            <img className='img' src={img2} alt='Все для дорослих' />
          </div>
        </Link>
        <Link to='/product-category/other'>
          <div className='items'>
            <img className='img' src={img3} alt='Різне' />
          </div>
        </Link>
      </div>
    </div>  
  );
};

export default HomeShop;