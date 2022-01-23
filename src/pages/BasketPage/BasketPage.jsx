import React from 'react';
import './BasketPage.css';
import Header from '../../components/Header/Header';
import BasketItemsList from '../../components/BasketItemsList/BasketItemsList';
import Button from '../../components/Button/Button';
import {useSelector} from 'react-redux';
import store from '../../app/store';

function BasketPage()
{
  const {basket} = useSelector(store.getState)

  return (
    <div className={'BasketPage'}>
      <Header/>
      <div className={'items-container'}>
        <h1 className={'items-title'}>Корзина с выбранными товарами</h1>
        <BasketItemsList/>
        <div className={'total-sum'}>
          <div className={'total-sum__wrapper'}>
            <span className={'total-sum__text'}>Заказ на сумму: </span>
            <span className={'total-sum__counter'}>{basket.total.price} ₽</span>
          </div>
          <Button>Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
}

export default BasketPage;