import React from 'react';
import './Header.css';
import logo from './images/logo.png';
import basketImg from './images/basket.png';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import store from '../../app/store';

function Header() {
  const {basket} = useSelector(store.getState)

  return (
    <header className={'header'}>
      <div className={'logo'}>
        <Link to={'/products'} className={'main-page-link'}>
          <img className={'logo__image'} src={logo} alt="Логотип"/>
        </Link>
        <h1 className={'logo__title'}>Мир рюкзаков</h1>
      </div>
      <div className={'basket'}>
        <div className={'counter'}>
          <span className={'items-counter'}>
            товаров: {basket.total.count}
          </span>
          <span className={'sum-counter'}>на сумму {basket.total.price} ₽</span>
        </div>
        <Link to={'/basket'} className={'basket-page-link'}>
          <img className={'basket__image'} src={basketImg} alt="Корзина"/>
        </Link>
      </div>
    </header>
  )
}

export default Header;