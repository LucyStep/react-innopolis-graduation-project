import BasketActionTypes from './basket.types';
import {addItemToBasket, recalculateTotal, removeItemFromBasket, deleteObjectFromBasket} from './basket.utils';

const INITIAL_STATE = {
  basketItems: [],
  total: {
    price: 0,
    count: 0
  }
}

const basketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BasketActionTypes.ADD_ITEM:
      return {
        ...state,
        basketItems: addItemToBasket(state.basketItems, action),
        total: recalculateTotal(state)
      }

    case BasketActionTypes.REMOVE_ITEM:
      return {
        ...state,
        basketItems: removeItemFromBasket(state.basketItems, action),
        total: recalculateTotal(state)
      }

    case BasketActionTypes.DELETE_OBJ:
      return {
        ...state,
        basketItems: deleteObjectFromBasket(state.basketItems, action.id),
        total: recalculateTotal(state)
      }

    default:
      return state;
  }
}

export default basketReducer;