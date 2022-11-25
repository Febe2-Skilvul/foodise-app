import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from './redux/foods/FoodSlice';

export const store = configureStore({
  reducer: {
    list: foodsReducer,
  },
});
