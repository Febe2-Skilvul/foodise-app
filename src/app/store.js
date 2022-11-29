import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from './redux/foods/FoodSlice';
import filterReducer from './redux/foods/FilterSlice';

export const store = configureStore({
  reducer: {
    list: foodsReducer,
    filter: filterReducer,
  },
});
