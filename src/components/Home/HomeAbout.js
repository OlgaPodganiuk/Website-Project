import { Fragment, useState } from "react";
import './HomeAbout.css'

const HomeAbout = (props) => {
  const [isActive, setActive] = useState();

  const classToggle = () => {
    setActive(!isActive);
  };

  return (
    <Fragment>
      <div className={!isActive ? 'home-about unvisible' : 'home-about'}>
        <p>iHerb</p>
        <p>IHerb – це всесвітньо відомий американський онлайн магазин, який продає органічну продукцію. Магазин iHerb пропонує 35,000 товарів, включаючи засоби для домашнього догляду, натуральну косметику, вітаміни та аромаолії. <br></br> Якість продукції світового стандарту забезпечують понад 1000 провідних виробників. Широкий асортимент брендів еко-продукції (Doctor's Best, Weleda, Derma, Alba Botanica, Aubrey Organics, MyChelle), найрізноманітніші товари: натуральна косметика для обличчя, тіла, волосся і т.д., здорове харчування, органічна побутова хімія, вітаміни, мінерали, спортивне харчування та багато іншого. <br></br> Безумовна перевага iHerb - відмінна якість товару за адекватну ціну. На вітчизняному ринку ціна на товари цих виробників (Weleda, Solgar та ін) набагато вище. Вибираючи iHerb ви більше не будете переплачувати за якість. Крім того, ви отримаєте доступ до величезного асортименту натуральних і екологічно чистих товарів. </p>
      </div>
      <div className={!isActive ? 'home-about unvisible' : 'home-about'}>
        <p>iHerb-rita</p>
        <p>На нашому сайті IHERB-RITA ви можете замовити продукцію в Україні за однаковою ціною! <br></br> Доставка Новою поштою в будь-який куточок України.<br></br> Оплата здійснюється безпосередньо на карту або наложним платежем при отриманні. <br></br> Вдалих покупок!</p>
        <button className='btn' onClick={classToggle}>назад</button>
      </div>
      <div className={!isActive ? 'home-about' : 'home-about unvisible'}>
        <p>iHerb</p>
        <p>IHerb – це всесвітньо відомий американський онлайн магазин, який продає органічну продукцію. Магазин iHerb пропонує 35,000 товарів, включаючи засоби для домашнього догляду, натуральну косметику, вітаміни та аромаолії. </p>
        <button className='btn' onClick={classToggle}>більше</button>
      </div>;
    </Fragment>
  );
};

export default HomeAbout;