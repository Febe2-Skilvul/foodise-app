import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from './redux/foods/FoodSlice';
import filterReducer from './redux/foods/FilterSlice';
import trackReducer from './redux/user/TrackingSlice';

export const store = configureStore({
  reducer: {
    list: foodsReducer,
    filter: filterReducer,
    track: trackReducer,
  },
});
