import react from 'react';

import './HomeShop.css';

const HomeShop = () => {
  return (
    <div className='home-shop'>
      <div className='flex'>
        <div className='items'>
          <img className='img' src='../img/1.jpg' alt='Vitamin D3' />
          <p>Вітамін D3 для дітей</p>
        </div>
        <div className='items'>
          <img className='img' src='../img/2.jpg' alt='Vitamin C' />
          <p>Вітамін C в капсулах</p>
        </div>
        <div className='items'>
          <img className='img' src='../img/3.jpg' alt='Lipbalm' />
          <p>Бальзам для губ</p>
        </div>
      </div>
      <button className='btn'>більше</button>
    </div>
  );
};

export default HomeShop;