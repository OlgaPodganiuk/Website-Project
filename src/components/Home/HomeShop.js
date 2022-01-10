import react from 'react';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';

import './HomeShop.css';

const HomeShop = () => {
  return (
    <div className='home-shop'>
      <div className='flex'>
        <div className='items'>
          <img className='img' src={img1} alt='Все для дітей' />
        </div>
        <div className='items'>
          <img className='img' src={img2} alt='Вітаміни' />
        </div>
        <div className='items'>
          <img className='img' src={img3} alt='Косметичні засоби' />
        </div>
      </div>
    </div>
  );
};

export default HomeShop;