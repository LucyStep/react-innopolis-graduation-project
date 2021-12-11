import React from 'react';
import './Header.css';
import logo from './images/logo.png';
import basket from './images/basket.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className={'header'}>
      <div className={'logo'}>
        <img className={'logo__image'} src={logo} alt="Логотип"/>
        <h1 className={'logo__title'}>Мир рюкзаков</h1>
      </div>
      <div className={'basket'}>
        <div className={'counter'}>
          <span className={'items-counter'}>1 товар</span>
          <span className={'sum-counter'}>на сумму 2499 ₽</span>
        </div>
        <Link to={'/basket'} className={'basket-page-link'}>
          <img className={'basket__image'} src={basket} alt="Корзина"/>
        </Link>
      </div>
    </header>
  )
}

export default Header;