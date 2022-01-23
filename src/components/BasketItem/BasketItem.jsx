import React from 'react';
import './BasketItem.css';
import {useDispatch, useSelector} from 'react-redux';
import {removeItem, deleteObj, addItem} from '../../app/basket/basket.actions';
import store from './../../app/store';

export default function BasketItem(
  {
    id = 0,
    image = '',
    name = '',
    price = 0
  }
)
{
  const {basket} = useSelector(store.getState)
  const item = basket.basketItems.find(e => e.id === id)

  const dispatch = useDispatch();

  const removeItemDispatcher = () => {
    dispatch(removeItem(id, price));
  };
  const addObjDispatcher = () => {
    dispatch(addItem(id,image, name, price));
  };
  const deleteObjDispatcher = () => {
    dispatch(deleteObj(id,image, name, price));
  };

  return (
    <div className={'selected-item'}>
      <div className={'item-name-wrapper'}>
        <img className={'item-image'} src={image} alt="Рюкзак"/>
        <span className={'item_name'}>{name}</span>
      </div>
      <div className={'item-quantity-wrapper'}>
        <div className={'square square_minus'} onClick={removeItemDispatcher}/>
        <span className={'item-quantity'}>{item.quantity}</span>
        <div className={'square square_plus'} onClick={addObjDispatcher}/>
      </div>
      <div className={'item-price-wrapper'}>
        <span className={'item-price'}>{item.priceSum} ₽</span>
        <div className={'circle-delete'} onClick={deleteObjDispatcher}/>
      </div>
    </div>
  )
}