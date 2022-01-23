import { combineReducers } from '@reduxjs/toolkit';

import basketReducer from './basket/basket.reducer';

export default combineReducers({
  basket: basketReducer
});