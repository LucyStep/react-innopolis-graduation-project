import React from 'react';
import BasketItem from '../BasketItem/BasketItem';
import {useSelector} from "react-redux";
import store from "../../app/store";

export default function BasketItemsList({items = []}) {
  const {basket} = useSelector(store.getState);
    return (
      <div className={'items-list'}>
        {basket.basketItems.map ((product) => (
          <BasketItem
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={`${product.price} ₽`}
          />
        ))}
      </div>
    )
}