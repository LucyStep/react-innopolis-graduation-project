import BasketActionTypes from './basket.types';

export const addItem = (id,image,name,price) => ({
  type: BasketActionTypes.ADD_ITEM,
  id,
  image,
  name,
  price
});

export const removeItem = (id, price) => ({
  type: BasketActionTypes.REMOVE_ITEM,
  id,
  price
});

export const deleteObj = (id) => ({
  type: BasketActionTypes.DELETE_OBJ,
  id
});